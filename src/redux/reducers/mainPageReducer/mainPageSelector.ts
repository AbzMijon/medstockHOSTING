import { RootState } from '@redux/store';

export const switchDataSelector = (state: RootState) => {
    return state.mainPage.switchData;
};

export const goodsSelector = (state: RootState) => {
    return state.mainPage.goods;
};

export const activeGoodSelector = (state: RootState) => {
    return state.mainPage.goods.find((good: any) => good.active);
};

export const nextActiveGoodSelector = (state: RootState) => {
    return state.mainPage.goods.find((good: any) => good.active);
};