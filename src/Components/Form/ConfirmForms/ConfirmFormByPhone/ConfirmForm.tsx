import DefaultButton from 'src/Components/DefaultButton/DefaultButton';
import styles from './confirmForm.module.scss'
import { setActiveConfirmation } from 'src/redux/reducers/registrationReducer/registrationReducer';
import { useAppDispatch } from 'src/redux/store';
import { ROUTES } from 'src/Routes/routes';
import { useNavigate } from 'react-router-dom';
import PinInput from '../../PinInput/PinInput';
import { useEffect, useRef, useState } from 'react';
import { setIsAuth } from '@src/redux/reducers/authReducer/authReducer';

const initialDigits = ['', '', '', ''];

function ConfirmFormByPhone() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const ref: any = useRef();

    useEffect(() => {
        ref.current?.focus();
    }, [])

    const [digits, setDigits] = useState<any[]>(initialDigits);
    const [countdown, setCountdown] = useState('00:59');
    const [isCounting, setIsCounting] = useState(false);

    const handleClick = () => {
        window.history.back();
    };

    useEffect(() => {
        if (isCounting) {
            let timeLeft = 59;
            const timer = setInterval(() => {
                const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
                const seconds = (timeLeft % 60).toString().padStart(2, '0');
                setCountdown(`${minutes}:${seconds}`);

                if (timeLeft === 0) {
                    clearInterval(timer);
                    setIsCounting(false);
                } else {
                    timeLeft--;
                }
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [isCounting]);

    const handleNewCodeRequest = () => {
        setIsCounting(true);
        setCountdown('00:59');
    };

    const handleSubmit = () => {
        dispatch(setIsAuth({ isAuth: true }));
        navigate(ROUTES.home);
    }

    return (
        <div className={styles.confirmForm}>
            <p className={styles.confirmForm__title}>Введите последние 4 цифры входящего номера</p>
            <p className={styles.confirmForm__subtitle}>
                Звоним на  +375 (44) 760 15 02
                <span onClick={handleClick} className={styles.confirmForm__change}>Изменить</span>
            </p>
            <div className={styles.confirmForm__form}>
                <div className={styles.confirmForm__input}>
                    <PinInput digits={digits} onChange={setDigits} ref={ref} />
                </div>
                {isCounting ? (
                    <p className={styles.confirmForm__newCode}>Получить новый код можно через {countdown}</p>
                ) : (
                    <p className={styles.confirmForm__oneMore} onClick={handleNewCodeRequest}>Запросить код ещё раз</p>
                )}
            </div>
            <DefaultButton
                text='Cоздать аккаунт'
                type='primary'
                onClick={handleSubmit}
                className={styles.confirmForm__btn}
            />
            <p className={styles.confirmForm__sms} onClick={() => dispatch(setActiveConfirmation({ type: 'sms' }))}>Запросить СМС код</p>
        </div>
    )
}

export default ConfirmFormByPhone;