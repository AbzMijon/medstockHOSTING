import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import belarusIcon from '@assets/svg/belarus.svg';

const registrationReducer = createSlice({
    name: 'registrationReducer',
    initialState: {
        countries: [
            { id: 0, title: 'Беларусь', code: '+375', icon: belarusIcon },
            { id: 1, title: 'Россия', code: '+7', icon: belarusIcon },
            { id: 2, title: 'Бангладеш', code: '+820', icon: belarusIcon },
            { id: 3, title: 'Казахстан', code: '+1', icon: belarusIcon },
        ],
        activeCountry: { id: 0, title: 'Беларусь', code: '+375', icon: belarusIcon },
        activeForm: 'default',
        activeConfirmation: 'phone'
    },
    reducers: {
        setActiveCountry: (state, action: PayloadAction<{ country: any }>) => {
            state.activeCountry = action.payload.country
        },
        setActiveForm: (state, action: PayloadAction<{ type: string }>) => {
            state.activeForm = action.payload.type;
        },
        setActiveConfirmation: (state, action: PayloadAction<{ type: string }>) => {
            state.activeConfirmation = action.payload.type;
        },
        setDefaultRegistrationData: (state) => {
            state.activeCountry = { id: 0, title: 'Беларусь', code: '+375', icon: belarusIcon };
            state.activeForm = 'default';
            state.activeConfirmation = 'phone';
        },
    },
});

export const { setActiveCountry, setActiveForm, setActiveConfirmation, setDefaultRegistrationData } = registrationReducer.actions;
export default registrationReducer.reducer;
