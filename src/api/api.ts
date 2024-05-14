import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { GetCookie, removeAllCookies, SetCookie } from '@src/cookie/cookie';

const hostBackendUrl = 'https://metal.lcs.by/medstock/api';

export const LOCAL_MEDIA_URL = 'http://localhost:8000';
export const HOST_MEDIA_URL = 'https://metal.lcs.by/medstock';

export const Instance = axios.create({
    baseURL: hostBackendUrl,
    headers: {
        Accept: 'application/json',
        ['Content-Type']: 'application/json',
    },
});


const logoutUser = () => {
    removeAllCookies();
    window.location.reload();
};

const onRequestFulfilled = (config: InternalAxiosRequestConfig) => {
const accessToken = GetCookie('access');

if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
};

const onRequestRejected = (error: any) => {
    return Promise.reject(error);
};

const INVALID_REFRESH_TOKEN_STATUSES = [
    'Token is invalid or expired',
    'Token is blacklisted',
    "Token 'exp' claim has expired",
];

const onResponseFulfilled = (response: AxiosResponse) => response;
const onResponseRejected = async (error: any) => {
    const originalRequest = error.config;

if (originalRequest?.url !== '/auth/login/' && error.response) {
    if (INVALID_REFRESH_TOKEN_STATUSES.some((status) => status === error?.response?.data?.detail)) {
        logoutUser();
        return;
    }

    if (error?.response?.status === 401 && !originalRequest?._retry) {
        originalRequest._retry = true;

        try {
            const refreshToken = GetCookie('refresh');

            if (!refreshToken) {
                logoutUser();
                throw new Error('Refresh token is undefined in cookie');
            }

            const { access: newAccessToken } = (await Instance.post('auth/login/refresh/', { refresh: refreshToken })).data;

            SetCookie('access', newAccessToken);

            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

            return Instance(originalRequest);
        } catch (refreshError) {
            removeAllCookies();
            window.location.reload();
            return Promise.reject(refreshError);
        }
    }
}

return Promise.reject(error);
};

Instance.interceptors.request.use(onRequestFulfilled, onRequestRejected);
Instance.interceptors.response.use(onResponseFulfilled, onResponseRejected);