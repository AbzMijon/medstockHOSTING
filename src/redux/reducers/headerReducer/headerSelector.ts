import { RootState } from '@redux/store';

export const authMenuSelector = (state: RootState) => {
    return state.headerReducer.authMenu;
};