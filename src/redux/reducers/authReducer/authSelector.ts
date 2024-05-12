import { RootState } from '@redux/store';

export const isAuthSelector = (state: RootState) => {
    return state.authReducer.isAuth;
};