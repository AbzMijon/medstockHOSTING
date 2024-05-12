import { RootState } from "src/redux/store";

export const calledModalsSelector = (state: RootState) => {
    return state.modalReducer.called_modal_list;
};

export const AreThereCalledModalSelector = (state: RootState) => {
    return state.modalReducer.called_modal_list?.length > 0;
};

export const modalItemOptions = (state: RootState) => {
    return state.modalReducer.modalItemOptions;
};

export const modalMessageForModal = (state: RootState) => {
    return state.modalReducer.messageForModal;
};