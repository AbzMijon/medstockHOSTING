import { useSelector } from 'react-redux';

import { useAppDispatch } from 'src/redux/store';
import { removeLastOpenedModal } from 'src/redux/reducers/modalReducer/modalReducer';

import { PopupWithOverlay } from '../Portals/PortalWithOverlay/PortalWithOverlay';
import { PopupWithoutOverlay } from '../Portals/PortalWithoutOverlay/PortalWithoutOverlay';
import { PopupWithDarkOverlay } from '../Portals/PortalWithDarkOverlay/PortalWithDarkOverlay';

import { calledModalsSelector } from 'src/redux/reducers/modalReducer/modalSelector';
import ModalItemOptions from './ModalItemOptions/ModalItemOptions';
import ModalConfirmCountry from './ModalConfirmCountry/ModalConfirmCountry';
import ModalSelectCountry from './ModalSelectCountry/ModalSelectCountry';
import ModalRegistration from './ModalRegistration/ModalRegistration';
import MessageModal from './MessageAlertModal/MessageAlertModal';
import RecoverPassModal from './ModalRecoverPass/ModalRecoverPass';

const ModalContainer = () => {
    const dispatch = useAppDispatch();

    const calledModals = useSelector(calledModalsSelector);

    const ContainerWithModalsArr = [
        { id: 0, name: 'modal-items-options', element: <ModalItemOptions /> },
        { id: 1, name: 'modal-confirm-country', element: <ModalConfirmCountry /> },
        { id: 2, name: 'modal-select-country', element: <ModalSelectCountry /> },
        { id: 3, name: 'modal-registration', element: <ModalRegistration /> },
        { id: 3, name: 'modal-message', element: <MessageModal /> },
        { id: 3, name: 'recover-pass-message', element: <RecoverPassModal /> },
    ];

  // HANDLERS
    const handleCloseModal = () => {
        dispatch(removeLastOpenedModal());
    }

    return (
        <>
            {calledModals?.map((called_modal, index: number) => {
                if (called_modal.withOverlay) {
                    return (
                        <PopupWithOverlay key={index} onClose={handleCloseModal} isOpened={called_modal.isModalActive}>
                        {ContainerWithModalsArr.find((modal) => modal.name === called_modal.modalName)?.element}
                        </PopupWithOverlay>
                    );
                }
                if (called_modal.withDarkOverlay) {
                    return (
                        <PopupWithDarkOverlay key={index} onClose={handleCloseModal} isOpened={called_modal.isModalActive}>
                        {ContainerWithModalsArr.find((modal) => modal.name === called_modal.modalName)?.element}
                        </PopupWithDarkOverlay>
                    );
                }
                return (
                    <PopupWithoutOverlay key={index} isOpened={called_modal.isModalActive}>
                        {ContainerWithModalsArr.find((modal) => modal.name === called_modal.modalName)?.element}
                    </PopupWithoutOverlay>
                );
            })}
        </>
    );
};

export default ModalContainer;
