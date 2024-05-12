import { combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import {AnyAction, configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import mainPageReducer from './reducers/mainPageReducer/mainPageReducer';
import registrationReducer from './reducers/registrationReducer/registrationReducer';
import modalReducer from './reducers/modalReducer/modalReducer';
import basketReducer from './reducers/basketReducer/basketReducer';
import authReducer from './reducers/authReducer/authReducer';
import headerReducer from './reducers/headerReducer/headerReducer';
import personalProfileReducer from './reducers/personalProfileReducer/personalProfileReducer';

const rootReducer = combineReducers({
    // ...some reducers
    mainPage: mainPageReducer,
    registration: registrationReducer,
    modalReducer: modalReducer,
    basketReducer: basketReducer,
    authReducer: authReducer,
    headerReducer: headerReducer,
    personalProfileReducer: personalProfileReducer
});

// Create the store
const store = configureStore({
    reducer: rootReducer,
});

// Types
export type RootStateType = ReturnType<typeof store.getState>;
export type AppThunkType = ThunkDispatch<RootStateType, void, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkType>();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;