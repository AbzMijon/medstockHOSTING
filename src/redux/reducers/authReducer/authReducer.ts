import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const authReducer = createSlice({
    name: 'authReducer',
    initialState: {
        isAuth: false
    },
    reducers: {
        setIsAuth: (state, action: PayloadAction<{ isAuth: boolean }>) => {
            state.isAuth = action.payload.isAuth;
        },
    },
});

export const { setIsAuth } = authReducer.actions;
export default authReducer.reducer;
