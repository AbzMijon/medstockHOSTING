import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import switchIcon1 from '@assets/svg/switchIcon1.svg';
import switchIcon2 from '@assets/svg/switchIcon2.svg';
import switchIcon3 from '@assets/svg/switchIcon3.svg';

import bedImg from '@assets/img/goodImg.png';


const mainPageReducer = createSlice({
    name: 'mainPageReducer',
    initialState: {
        switchData: [
            { id: 0, icon: switchIcon1, title: 'Дизайн под ключ' },
            { id: 1, icon: switchIcon2, title: 'Система скидок' },
            { id: 2, icon: switchIcon3, title: 'Обслуживание' },
        ],
        goods: [
            { id: 0, title: 'Кровати', bg: '#6C9CFF', color: '#fff', active: false, img: bedImg },
            { id: 1, title: 'Кушетки', bg: '#211E31', color: '#fff', active: false, img: bedImg },
            { id: 2, title: 'Кресла', bg: '#A1A9C3', active: false, img: bedImg },
            { id: 3, title: 'Тумбочки', bg: '#E3E6ED', active: false, img: bedImg },
        ]
    },
    reducers: {
        setNewSwitchData: (state, acttion: PayloadAction<{ index: number }>) => {
            const newData = [...state.switchData];

            const [selectedItem] = newData.splice(acttion.payload.index, 1);
            newData.splice(1, 0, selectedItem);

            state.switchData = newData;
        },
        setActiveGood: (state, action: PayloadAction<{ id: number }>) => {
            state.goods = state.goods.map((good: { id: number, title: string, active: boolean }) => {
                if(good.id === action.payload.id) {
                    return { ...good, active: true }
                }   else {
                    return { ... good, active: false}
                }
            })
        },
        setGoods: (state, action: PayloadAction<{ newGoods: any[] }>) => {
            state.goods = action.payload.newGoods;
        }
    },
});

export const { setNewSwitchData, setActiveGood, setGoods } = mainPageReducer.actions;
export default mainPageReducer.reducer;
