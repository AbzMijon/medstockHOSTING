export type initialStateModalReducerType = {
    called_modal_list: Modal[];
    modalItemOptions: any[];
    messageForModal: string;
};

export type Modal = {
    modalName: string;
    isModalActive: boolean;
    withOverlay: boolean | undefined;
    withDarkOverlay: boolean | undefined;
};
