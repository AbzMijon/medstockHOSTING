import { useEffect, useState } from 'react';
import styles from './passwordRecoveryPage.module.scss';
import { useAppDispatch } from '@src/redux/store';
import { createNewPasswordTC } from '@src/api/authApi/authThunks';
import InputField from '@src/Components/Form/InputField/InputField';
import DefaultButton from '@src/Components/DefaultButton/DefaultButton';
import { setMessageModal, setModalByName } from '@src/redux/reducers/modalReducer/modalReducer';

function PasswordRecoveryPage() {

    const [token, setToken] = useState("");
    const [password, setPassword] = useState<string>('');
    const [passwordRepeat, setPasswordRepeat] = useState<string>('');
    const dispatch = useAppDispatch();

    useEffect(() => {
        let token = window.location.href.split("=")[1];
        setToken(token);
    }, []);

    const onSubmit = () => {
        if(password === passwordRepeat) {
            dispatch(
                createNewPasswordTC({
                    token: token,
                    password: password,
                }),
            );
        }   else {
            dispatch(setModalByName({ isModalActive: true, modalName: 'modal-message', withDarkOverlay: true }));
            dispatch(setMessageModal({ message: 'Пароли не совпадают!' }));
        }
    }

    return (
        <div className={styles.passwordRecoveryPage}>
            <p className={styles.passwordRecoveryPage__title}>Задайте новый пароль</p>
            <div className={styles.passwordRecoveryPage__form}>
                <InputField
                    type='password'
                    placeholder='Новый пароль'
                    value={password}
                    setValue={setPassword}
                />
                <InputField
                    type='password'
                    placeholder='Повторите новый пароль'
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                />
                <DefaultButton
                    type='primary'
                    text='Сохранить'
                    onClick={onSubmit}
                    className={styles.passwordRecoveryPage__btn}
                />
            </div>
        </div>
    )
}

export default PasswordRecoveryPage;