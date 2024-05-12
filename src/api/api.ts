import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { GetCookie, removeAllCookies, SetCookie } from '@src/cookie/cookie';

const localBackendUrl = 'http://localhost:8000/api/';
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
    const accessToken = GetCookie('access_token');

    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
};

const onRequestRejected = (error: any) => {
    return Promise.reject(error);
};

const onResponseFulfilled = (response: AxiosResponse) => response;
const onResponseRejected = async (error: any) => {
    const originalRequest = error.config;

    if (originalRequest?.url !== '/auth/login/' && error.response) {
    }

    return Promise.reject(error);
};

Instance.interceptors.request.use(onRequestFulfilled, onRequestRejected);
Instance.interceptors.response.use(onResponseFulfilled, onResponseRejected);
