import { ROUTES } from 'src/Routes/routes';
import DefaultButton from '../../DefaultButton/DefaultButton';
import InputField from '../InputField/InputField';
import styles from './registrationFormByMail.module.scss';
import logo from '@assets/svg/logoMedstock.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@src/redux/store';
import { registerThunk } from '@src/api/authApi/authThunks';
import { setModalByName } from '@src/redux/reducers/modalReducer/modalReducer';

function RegistrationFormByMail() {

    const [isCheckboxActive, setIsCheckboxActive] = useState<boolean>(false);
    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isDisabled = () => {
        if(isCheckboxActive && name && surname && email && password) {
            return false;
        }
        return true;
    }

    const handleSubmit = () => {
        const data = {
            username: name + surname,
            email: email,
            password: password
        };
        dispatch(registerThunk(data, navigate));
    };

    const handleLogin = () => {
        navigate(ROUTES.home);
        dispatch(setModalByName({ isModalActive: true, modalName: 'modal-registration', withDarkOverlay: true }));
    }

    return (
        <div className={styles.registrationForm}>
            <p className={styles.registrationForm__title}>
                Регистрация на
                <img src={logo} alt="" className={styles.registrationForm__logo} />
            </p>
            <div className={styles.registrationForm__nameAndSurname}>
                <InputField 
                    placeholder='Имя' 
                    className={styles.registrationForm__input} 
                    type='text'
                    value={name}
                    setValue={setName}
                />
                <InputField 
                    placeholder='Фамилия' 
                    className={styles.registrationForm__input} 
                    type='text'
                    value={surname}
                    setValue={setSurname}
                />
            </div>
            <InputField 
                placeholder='Email' 
                className={styles.registrationForm__input_fullwidth} 
                type='email'
                value={email}
                setValue={setEmail}
            />
            <InputField 
                placeholder='Пароль' 
                className={styles.registrationForm__input_fullwidth} 
                type='password'
                value={password}
                setValue={setPassword}
            />
            <div className={styles.registrationForm__checkbox_wrap}>
                <input 
                    type="checkbox" 
                    className={styles.registrationForm__checkbox} 
                    id='checkbox'
                />
                <label 
                    htmlFor="checkbox" 
                    className={styles.registrationForm__checkbox_text}
                    onClick={() => setIsCheckboxActive(!isCheckboxActive)}
                >
                    <p>
                        Я согласен с <span>Условиями использования</span> Medstok и <span>Политикой конфиденциальности</span>
                    </p>
                </label>
            </div>
            <DefaultButton 
                text='Cоздать аккаунт'
                type='primary'
                onClick={handleSubmit}
                className={styles.registrationForm__btn}
                disabled={isDisabled()}
            />
            <p className={styles.registrationForm__hasAcc}>
                У вас уже есть аккаунт?
                <span onClick={handleLogin}>Войти</span>
            </p>
        </div>
    )
}

export default RegistrationFormByMail;