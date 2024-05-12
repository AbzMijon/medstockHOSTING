import { RootState } from '@redux/store';

export const basketCardsSelector = (state: RootState) => {
    return state.basketReducer.basketCards;
};