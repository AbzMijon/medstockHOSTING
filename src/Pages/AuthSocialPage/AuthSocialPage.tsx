import { useEffect } from 'react';

import { useAppDispatch } from '@redux/store';
import { SetCookie } from '@src/cookie/cookie';
import parseUriParams from '@src/helpers/parseUriParams';
import deleteAllCookies from '@src/helpers/deleteAllCookies';
import { loginWithOAuthKeyThunk } from '@src/api/authApi/authThunks';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@src/Routes/routes';
import { setActiveConfirmation } from '@src/redux/reducers/registrationReducer/registrationReducer';

const AuthSocialPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    console.log('localhost:3000/key_auth/?key=28319d04-e303-47a2-9815-1e44c0612616&success=true');
    

    useEffect(() => {
        const params = parseUriParams(window.location.href);
        console.log('params', params);
        

        if (params && params?.success === 'true') {
            deleteAllCookies(); //???
            SetCookie('oauth_key', params?.key);
            dispatch(loginWithOAuthKeyThunk());
        }   else if (params && params?.success === 'false') {
            dispatch(setActiveConfirmation({ type: 'old-link' }))
            navigate(ROUTES.verification);
        } else {
            window.location.href = '/';
        }
    }, []);

    return <></>;
};

export default AuthSocialPage;
