import { RootState } from '@redux/store';

export const countriesSelector = (state: RootState) => {
    return state.registration.countries;
};

export const activeCountrySelector = (state: RootState) => {
    return state.registration.activeCountry;
};

export const activeFormSelector = (state: RootState) => {
    return state.registration.activeForm;
};

export const activeConfirmationSelector = (state: RootState) => {
    return state.registration.activeConfirmation;
};