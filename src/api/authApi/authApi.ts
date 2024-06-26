import { Instance } from '../api';
import { GetCookie } from '@src/cookie/cookie';

const authApi = {
    login: (data: any) => Instance.post('/auth/login/', data),
    register: (data: any) => Instance.post('/auth/register/', data),
    authMe: () =>
        Instance.get('/auth/me/', {
            headers: {
                Authorization: `Bearer ${GetCookie('access_token')}`,
            },
        }),
    logout: () =>
        Instance.post("/auth/logout/", {
            refresh: GetCookie("refresh"),
        }),
    getAuthTokensWithOAuthKey: () => Instance.get(`auth/social_enter/?key=${GetCookie('oauth_key')}`),
    resetPassword: (email: { email: string }) => Instance.post('auth/password_reset/', email),
    createNewPassword: (body: any) => Instance.post('auth/password_reset/confirm/', body),
};

export default authApi;
