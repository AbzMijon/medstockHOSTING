import styles from './modalRecoverPass.module.scss';
import { useAppDispatch } from '@src/redux/store';
import { removeModalByName } from '@src/redux/reducers/modalReducer/modalReducer';
import { useSelector } from 'react-redux';
import close from '@assets/svg/delete.svg';
import DefaultButton from '@src/Components/DefaultButton/DefaultButton';
import { modalMessageForModal } from '@src/redux/reducers/modalReducer/modalSelector';
import InputField from '@src/Components/Form/InputField/InputField';
import { useState } from 'react';
import { resetPasswordThunk } from '@src/api/authApi/authThunks';

const RecoverPassModal = () => {

    const dispatch = useAppDispatch();
    const [mail, setMail] = useState<string>('');

    const handleCloseModal = () => {
        dispatch(removeModalByName({ modalName: 'modal-recover-pass' }));
    };
    
    const onSubmit = () => {
        dispatch(resetPasswordThunk({ email: mail }));
    };

    return (
        <div className={styles.recoverModal} id="recoverModal">
            <div className={styles.recoverModal__container}>
                <div className={styles.recoverModal__close} onClick={handleCloseModal}>
                    <img src={close} alt="Close Icon" className={styles.recoverModal__close_img} />
                </div>
                <p className={styles.recoverModal__title}>Восстановление пароля</p>
                <div className={styles.recoverModal__text}>Введите свой адрес электронной почты ниже, и мы отправим вам электронное письмо с инструкциями о том, как создать новый пароль</div>
                <InputField
                    type='email'
                    placeholder='E-mail'
                    value={mail}
                    setValue={setMail}
                />
                <DefaultButton 
                    text='Восстановить пароль' 
                    type='primary' 
                    onClick={onSubmit} 
                    className={styles.recoverModal__btn}
                    disabled={!mail.length}
                />
            </div>
        </div>
    );
};

export default RecoverPassModal;
