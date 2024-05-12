import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import catalogItem1Img1 from '@assets/img/catalogItem1Img1.png';
import catalogItem2Img1 from '@assets/img/catalogItem2Img1.png';
import catalogItem3Img1 from '@assets/img/catalogItem3Img1.png';
import optionImg from '@assets/img/option.png';

const basketReducer = createSlice({
    name: 'basketReducer',
    initialState: {
        basketCards: [
            {
                id: 0,
                img: catalogItem1Img1,
                favorite: false,
                title: 'Nitro hb 8150 sante ',
                category: 'Кровать для интенсивной терапии',
                options: [
                    { id: 0, title: '28D Водонепроницаемый матрас', src: optionImg, price: '2500 руб', select: true },
                    { id: 1, title: 'Дополнительные ролики  150D', src: optionImg, price: '2500 руб', select: true },
                    { id: 2, title: '28D Водонепроницаемый матрасc', src: optionImg, price: '2500 руб', select: false },
                    { id: 3, title: '28D Водонепроницаемый матрасcc', src: optionImg, price: '2500 руб', select: false },
                    { id: 4, title: '28D Водонепроницаемый матрасу', src: optionImg, price: '2500 руб', select: false },
                    { id: 5, title: '28D Водонепроницаемый матрасе', src: optionImg, price: '2500 руб', select: false },
                    { id: 6, title: '28D Водонепроницаемый матраса', src: optionImg, price: '2500 руб', select: false },
                ],
                count: 1,
                sum: '4 000 р'
            },
            {
                id: 1,
                img: catalogItem2Img1,
                favorite: false,
                title: 'Nitro hb 8150 sante ',
                category: 'Кровать для интенсивной терапии',
                options: [
                    { id: 0, title: '28D Водонепроницаемый матрас', src: optionImg, price: '2500 руб', select: true },
                    { id: 1, title: 'Дополнительные ролики  150D', src: optionImg, price: '2500 руб', select: true },
                    { id: 2, title: '28D Водонепроницаемый матрас', src: optionImg, price: '2500 руб', select: false },
                    { id: 3, title: '28D Водонепроницаемый матрас', src: optionImg, price: '2500 руб', select: false },
                    { id: 4, title: '28D Водонепроницаемый матрас', src: optionImg, price: '2500 руб', select: false },
                    { id: 5, title: '28D Водонепроницаемый матрас', src: optionImg, price: '2500 руб', select: false },
                    { id: 6, title: '28D Водонепроницаемый матрас', src: optionImg, price: '2500 руб', select: false },
                ],
                count: 1,
                sum: '4 000 р'
            },
            {
                id: 2,
                img: catalogItem3Img1,
                favorite: false,
                title: 'Nitro hb 8150 sante ',
                category: 'Кровать для интенсивной терапии',
                options: [
                    { id: 0, title: '28D Водонепроницаемый матрас', src: optionImg, price: '2500 руб', select: true },
                    { id: 1, title: 'Дополнительные ролики  150D', src: optionImg, price: '2500 руб', select: true },
                    { id: 2, title: '28D Водонепроницаемый матрас', src: optionImg, price: '2500 руб', select: false },
                    { id: 3, title: '28D Водонепроницаемый матрас', src: optionImg, price: '2500 руб', select: false },
                    { id: 4, title: '28D Водонепроницаемый матрас', src: optionImg, price: '2500 руб', select: false },
                    { id: 5, title: '28D Водонепроницаемый матрас', src: optionImg, price: '2500 руб', select: false },
                    { id: 6, title: '28D Водонепроницаемый матрас', src: optionImg, price: '2500 руб', select: false },
                ],
                count: 1,
                sum: '4 000 р'
            }
        ]
    },
    reducers: {
        setSelectBasketItemOption: (state, aciton: PayloadAction<{ id: number }>) => {
            
        }
    },
});

export const { setSelectBasketItemOption } = basketReducer.actions;
export default basketReducer.reducer;
