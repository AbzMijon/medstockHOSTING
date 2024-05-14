import { useEffect, useState } from 'react';

import { GetCookie } from '@src/cookie/cookie';
import authApi from '@src/api/authApi/authApi';
import { setAuthInfo, setIsAuth } from '@redux/reducers/authReducer/authReducer';
import { useAppDispatch } from '@redux/store';
import { Loader } from '@src/Components/Loader/Loader';

export const AuthProvider = ({ children }: any) => {
    const dispatch = useAppDispatch();
    const [isUserInfoLoading, setIsUserInfoLoading] = useState(true);

    useEffect(() => {
        if (GetCookie('access')) {
            authApi
            .authMe()
            .then(({ data }) => {
                dispatch(setAuthInfo(data));
                dispatch(setIsAuth({ isAuth: true }));
                setIsUserInfoLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsUserInfoLoading(false);
            });
        } else {
            setIsUserInfoLoading(false);
        }
    }, [GetCookie('access') !== undefined]);


    return isUserInfoLoading ? <Loader /> : children;
};
