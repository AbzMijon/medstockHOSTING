import styles from './messageAlertModal.module.scss';
import { useAppDispatch } from '@src/redux/store';
import { removeModalByName } from '@src/redux/reducers/modalReducer/modalReducer';
import { useSelector } from 'react-redux';
import close from '@assets/svg/delete.svg';
import DefaultButton from '@src/Components/DefaultButton/DefaultButton';
import { modalMessageForModal } from '@src/redux/reducers/modalReducer/modalSelector';

const MessageModal = () => {

    const dispatch = useAppDispatch();
    const message = useSelector(modalMessageForModal);
    const handleCloseModal = () => {
        dispatch(removeModalByName({ modalName: 'modal-message' }));
    };

    return (
        <div className={styles.messageModal} id="messageModal">
            <div className={styles.messageModal__container}>
                <div className={styles.messageModal__close} onClick={handleCloseModal}>
                    <img src={close} alt="Close Icon" className={styles.messageModal__close_img} />
                </div>
                <div className={styles.messageModal__message}>{message}</div>
                <DefaultButton 
                    text='Ок' 
                    type='primary' 
                    onClick={handleCloseModal} 
                    className={styles.messageModal__btn}
                />
            </div>
        </div>
    );
};

export default MessageModal;
