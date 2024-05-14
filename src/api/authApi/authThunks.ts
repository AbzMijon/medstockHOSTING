import { RemoveCookie, SetCookie } from '@src/cookie/cookie';
import { Dispatch, SetStateAction } from 'react';
import authApi from './authApi';
import { removeModalByName, setMessageModal, setModalByName } from '@src/redux/reducers/modalReducer/modalReducer';
import { ROUTES } from '@src/Routes/routes';
import { setActiveConfirmation } from '@src/redux/reducers/registrationReducer/registrationReducer';
import { setAuthInfo, setIsAuth } from '@src/redux/reducers/authReducer/authReducer';

export const loginThunk = (data: any) => {
    return (dispatch: Dispatch<SetStateAction<{}>>) => {
        authApi.login(data).then((res: any) => {
            if (res.status === 200) {
                SetCookie('access', res.data.access);
                SetCookie('refresh', res.data.refresh);
                dispatch(setAuthInfo(res.data));
                dispatch(setIsAuth({ isAuth: true }));
            }
        }).catch((err) => {
            dispatch(removeModalByName({ modalName: 'modal-registration' }));
            dispatch(setModalByName({ isModalActive: true, modalName: 'modal-message', withDarkOverlay: true }));
            dispatch(setMessageModal({ message: err.response.data.detail }));
        });
    };
};

export const registerThunk = (data: any, navigate?: any) => {
    return (dispatch: Dispatch<SetStateAction<{}>>) => {
        authApi.register(data).then((res: any) => {
            dispatch(setActiveConfirmation({ type: 'email' }));
            navigate(ROUTES.verification);
        }).catch((err) => {
            dispatch(removeModalByName({ modalName: 'modal-registration' }));
            dispatch(setModalByName({ isModalActive: true, modalName: 'modal-message', withDarkOverlay: true }));
            dispatch(setMessageModal({ message: err.response.data.detail }));
        });
    };
};

export const getAuthMe = () => {
    return (dispatch: Dispatch<SetStateAction<{}>>) => {
        authApi
            .authMe()
            .then((res: any) => {
                dispatch(setAuthInfo(res.data));
                dispatch(setIsAuth({ isAuth: true }));
            })
            .catch((error: any) => {
                console.log(error);
            });
    };
};

export const logoutThunk = () => (dispatch: Dispatch<SetStateAction<{}>>) => {
    authApi.logout().finally(() => {
        RemoveCookie("access");
        RemoveCookie("refresh");
        RemoveCookie("oauth_key");
        RemoveCookie("sessionid");

        dispatch(setIsAuth({ isAuth: false }));
        dispatch(setAuthInfo({}));

        window.location.href = "/";
        setTimeout(() => {
            window.location.reload();
        }, 500);
    });
};

export const loginWithOAuthKeyThunk = () => (dispatch: Dispatch<SetStateAction<{}>>) => {
    authApi.getAuthTokensWithOAuthKey().then((res) => {
        SetCookie('access', res.data.access);
        SetCookie('refresh', res.data.refresh);
        if (res.status === 400) {
            window.location.href = '/';
        } else {
            window.location.href = '/';
        }

        setTimeout(() => {
            dispatch(getAuthMe());
        }, 100);
    });
};
