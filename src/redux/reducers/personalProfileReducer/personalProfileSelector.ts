import { RootState } from '@redux/store';

export const profileMenuSelector = (state: RootState) => {
    return state.personalProfileReducer.profileMenu;
};

export const profileCurrentClickedDataInTableSelector = (state: RootState) => {
    return state.personalProfileReducer.currentClickedDataInTable;
};