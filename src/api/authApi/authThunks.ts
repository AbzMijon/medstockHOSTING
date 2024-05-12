import { SetCookie } from '@src/cookie/cookie';
import { Dispatch, SetStateAction } from 'react';
import authApi from './authApi';
import { removeModalByName, setMessageModal, setModalByName } from '@src/redux/reducers/modalReducer/modalReducer';
import { ROUTES } from '@src/Routes/routes';
import { setActiveConfirmation } from '@src/redux/reducers/registrationReducer/registrationReducer';

export const loginThunk = (data: any) => {
    return (dispatch: Dispatch<SetStateAction<{}>>) => {
        authApi.login(data).then((res: any) => {
            if (res.status === 200) {
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
