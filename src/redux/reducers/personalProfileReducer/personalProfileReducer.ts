import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import avatarIcon from '@assets/svg/avatar.svg';
import shopHistoryIcon from '@assets/svg/shopHistory.svg';
import communicationIcon from '@assets/svg/communication.svg';
import deliveryIcon from '@assets/svg/deliveri.svg';
import paymentIcon from '@assets/svg/payment.svg';

const personalProfileReducer = createSlice({
    name: 'personalProfileReducer',
    initialState: {
        profileMenu: [
            { id: 0, title: 'Личный кабинет', icon: avatarIcon, redirectLink: '/profile/personal' },
            { id: 1, title: 'История покупок', icon: shopHistoryIcon, redirectLink: '/profile/purchases' },
            { id: 2, title: 'Способ оплаты', icon: paymentIcon, redirectLink: '/profile/payment' },
            { id: 3, title: 'Адрес доставки', icon: deliveryIcon, redirectLink: '/profile/delivery' },
            { id: 4, title: 'Рассылки', icon: communicationIcon, redirectLink: '/profile/newsletters' },
        ],
        currentClickedDataInTable: null,
    },
    reducers: {
        setCurrentClickedData: (state, action: PayloadAction<{ data: any }>) => {
            state.currentClickedDataInTable = action.payload.data;
        },
    },
});

export const { setCurrentClickedData } = personalProfileReducer.actions;
export default personalProfileReducer.reducer;
