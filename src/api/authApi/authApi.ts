import { Instance } from '../api';
import { GetCookie } from '@src/cookie/cookie';

const authApi = {
    login: (data: any) => Instance.post('auth/login/', data),
    register: (data: any) => Instance.post('auth/register/', data),
    authMe: () =>
        Instance.get('auth/me', {
            headers: {
                Authorization: `Bearer ${GetCookie('access_token')}`,
            },
        }),
    logout: () =>
        Instance.post('auth/logout', {
            headers: {
                Authorization: `Bearer ${GetCookie('access_token')}`,
            },
        }),
};

export default authApi;
