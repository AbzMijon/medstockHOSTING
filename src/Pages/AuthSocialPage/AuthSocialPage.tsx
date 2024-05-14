import { useEffect } from 'react';

import { useAppDispatch } from '@redux/store';
import { SetCookie } from '@src/cookie/cookie';
import parseUriParams from '@src/helpers/parseUriParams';
import deleteAllCookies from '@src/helpers/deleteAllCookies';
import { loginWithOAuthKeyThunk } from '@src/api/authApi/authThunks';

const AuthSocialPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const params = parseUriParams(window.location.href);
        console.log('params', params);
        

        if (params) {
            deleteAllCookies(); //???

            SetCookie('oauth_key', params?.key);

            dispatch(loginWithOAuthKeyThunk());
        } else {
            
        }
    }, []);

    return <></>;
};

export default AuthSocialPage;
