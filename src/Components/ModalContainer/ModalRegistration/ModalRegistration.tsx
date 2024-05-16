import DefaultButton from '@src/Components/DefaultButton/DefaultButton';
import styles from './modalRegistration.module.scss';
import closeIcon from '@assets/svg/delete.svg';
import { useAppDispatch } from '@src/redux/store';
import { removeModalByName, setModalByName } from '@src/redux/reducers/modalReducer/modalReducer';
import InputField from '@src/Components/Form/InputField/InputField';
import googleIcon from '@assets/svg/Social1.svg';
import facebookIcon from '@assets/svg/Social2.svg';
import vkIcon from '@assets/svg/Social3.svg';
import { ROUTES } from '@src/Routes/routes';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from '@src/api/authApi/authThunks';
import { useState } from 'react';

function ModalRegistration() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleCloseModal = () => {
        dispatch(removeModalByName({ modalName: 'modal-registration' }));
    };

    const handleRegistrationPage = () => {
        navigate(ROUTES.registration);
        handleCloseModal();
    }

    const handleLogIn = () => {
        const testObj = { username, password }
        dispatch(loginThunk(testObj));
    };

    const handleRecoverPass = () => {
        handleCloseModal();
        dispatch(setModalByName({ isModalActive: true, modalName: 'recover-pass-message', withDarkOverlay: true }));
    };

    return (
        <div className={styles.modalRegistration}>
            <div className={styles.modalRegistration__close} onClick={handleCloseModal}>
                <img src={closeIcon} alt="" className={styles.modalRegistration__close_icon} />
            </div>
            <div className={styles.modalRegistration__content}>
                <p className={styles.modalRegistration__title}>Создать учетную запись</p>
                <div className={styles.modalRegistration__social}>
                    <button className={styles.modalRegistration__social_btn}>
                        <img src={googleIcon} alt="" className={styles.modalRegistration__social_icon} />
                        <p className={styles.modalRegistration__social_name}>Регистрация через Google</p>
                    </button>
                    <button className={styles.modalRegistration__social_btn}>
                        <img src={facebookIcon} alt="" className={styles.modalRegistration__social_icon} />
                        <p className={styles.modalRegistration__social_name}>Регистрация через Facebook</p>
                    </button>
                    <button className={styles.modalRegistration__social_btn}>
                        <img src={vkIcon} alt="" className={styles.modalRegistration__social_icon} />
                        <p className={styles.modalRegistration__social_name}>Регистрация через Вконтакте</p>
                    </button>
                </div>
                <div className={styles.modalRegistration__or}>
                    <div className={styles.modalRegistration__or_line}></div>
                    <p className={styles.modalRegistration__or_text}>или</p>
                    <div className={styles.modalRegistration__or_line}></div>
                </div>
                <div className={styles.modalRegistration__form}>
                    <InputField
                        type='text'
                        placeholder='Никнейм'
                        value={username}
                        setValue={setUsername}
                    />
                    <InputField
                        type='password'
                        placeholder='Пароль'
                        value={password}
                        setValue={setPassword}
                    />
                </div>
                <div className={styles.modalRegistration__btns}>
                    <DefaultButton
                        text='Войти'
                        type='primary'
                        onClick={handleLogIn}
                        className={styles.modalRegistration__btn}
                    />
                    <p className={styles.modalRegistration__recoverPass} onClick={handleRecoverPass}>Забыли пароль?</p>
                    <DefaultButton
                        text='Зарегистрироваться'
                        type='secondary'
                        onClick={handleRegistrationPage}
                        className={styles.modalRegistration__btn}
                    />
                </div>
            </div>
        </div>
    )
}

export default ModalRegistration;