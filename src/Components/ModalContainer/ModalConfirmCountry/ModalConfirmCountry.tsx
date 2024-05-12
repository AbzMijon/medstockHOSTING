import { useAppDispatch } from 'src/redux/store';
import styles from './modalConfirmCountry.module.scss';
import { removeModalByName, setModalByName } from 'src/redux/reducers/modalReducer/modalReducer';
import closeIcon from '@assets/svg/delete.svg';
import DefaultButton from 'src/Components/DefaultButton/DefaultButton';
import { useCookies } from 'react-cookie';

function ModalConfirmCountry() {

    const dispatch = useAppDispatch();
    const [cookies, setCookie] = useCookies(['currentCity']);

    const handleCloseModal = () => {
        dispatch(removeModalByName({ modalName: 'modal-confirm-country' }));
    };

    const handleSelectAnotherCountry = () => {
        dispatch(removeModalByName({ modalName: 'modal-confirm-country' }));
        dispatch(setModalByName({ isModalActive: true, modalName: 'modal-select-country', withDarkOverlay: true }));
    };

    const handleAcceptCookie = () => {
        setCookie('currentCity', true);
        handleCloseModal();
    };

    return (
        <div className={styles.modalConfirmCountry}>
            <div className={styles.modalConfirmCountry__close} onClick={handleCloseModal}>
                <img src={closeIcon} alt="" className={styles.modalConfirmCountry__close_icon} />
            </div>
            <div className={styles.modalConfirmCountry__content}>
                <p className={styles.modalConfirmCountry__title}>Ваш город Москва?</p>
                <div className={styles.modalConfirmCountry__btns}>
                    <DefaultButton
                        text='Выбрать город'
                        type='secondary'
                        onClick={handleSelectAnotherCountry}
                        className={styles.modalConfirmCountry__btn_another}
                    />
                    <DefaultButton
                        text='Да'
                        type='primary'
                        onClick={handleAcceptCookie}
                        className={styles.modalConfirmCountry__btn_ok}
                    />
                </div>
            </div>
        </div>
    )
}

export default ModalConfirmCountry;