import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Modal, initialStateModalReducerType } from "src/types/modal";

const initialStateModalReducer = {
    called_modal_list: [] as Modal[],
    detailSuccessMessageForUser: "",
    detailErrorMessageForUser: "",
    modalItemOptions: [],
    messageForModal: "",
} as initialStateModalReducerType;

const modalReducer = createSlice({
    name: "modalReducer",
    initialState: initialStateModalReducer,
    reducers: {
        setModalByName: (
            state,
            action: PayloadAction<{
                isModalActive: boolean;
                modalName?: string | undefined;
                withOverlay?: boolean | undefined;
                withDarkOverlay?: boolean | undefined;
            }>,
        ) => {
        if (action.payload.isModalActive && action.payload.modalName && (action.payload.withDarkOverlay || action.payload.withOverlay)) {
            const newModal = {
            isModalActive: action.payload.isModalActive,
            modalName: action.payload.modalName,
            withOverlay: action.payload.withOverlay,
            withDarkOverlay: action.payload.withDarkOverlay,
            };
            state.called_modal_list.push(newModal);
        }
        }, // сетаем полный обьект: {isModalActive: true, ModalName: 'имя-модалки', WithOverlay: true или false}
        removeModalByName: (state, action: PayloadAction<{ modalName: string }>) => {
            state.called_modal_list = state.called_modal_list.filter((modal) => modal.modalName !== action.payload.modalName);
        }, // указываем имя модалки для закрытия, к примеру modalName: 'modal-success-alert'
        removeLastOpenedModal: (state) => {
            state.called_modal_list.pop();
        },
        removeAllModal: (state) => {
            state.called_modal_list = [];
        },
        setItemOptions: (state, action: PayloadAction<{ options: any[] }>) => {
            state.modalItemOptions = action.payload.options;
        },
        setMessageModal: (state, action: PayloadAction<{ message: string }>) => {
            state.messageForModal = action.payload.message;
        },
    }
});

export default modalReducer.reducer;

export const {
    setModalByName,
    removeModalByName,
    removeAllModal,
    removeLastOpenedModal,
    setItemOptions,
    setMessageModal
} = modalReducer.actions;
