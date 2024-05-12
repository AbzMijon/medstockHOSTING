import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ROUTES } from '@src/Routes/routes';
import avatarIcon from '@assets/svg/avatar.svg';
import shopHistoryIcon from '@assets/svg/shopHistory.svg';
import communicationIcon from '@assets/svg/communication.svg';
import deliveryIcon from '@assets/svg/deliveri.svg';
import paymentIcon from '@assets/svg/payment.svg';

const headerReducer = createSlice({
    name: 'headerReducer',
    initialState: {
        authMenu: [
            { id: 0, title: 'Личный кабинет', icon: avatarIcon, redirectLink: '/profile/personal' },
            { id: 1, title: 'История покупок', icon: shopHistoryIcon, redirectLink: '/profile/purchases' },
            { id: 2, title: 'Способ оплаты', icon: paymentIcon, redirectLink: '/profile/payment' },
            { id: 3, title: 'Адрес доставки', icon: deliveryIcon, redirectLink: '/profile/delivery' },
            { id: 4, title: 'Рассылки', icon: communicationIcon, redirectLink: '/profile/newsletters' },
        ]
    },
    reducers: {
        setIsAuth: (state, action: PayloadAction<{ isAuth: boolean }>) => {
            
        },
    },
});

export const { setIsAuth } = headerReducer.actions;
export default headerReducer.reducer;
