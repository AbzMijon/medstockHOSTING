import DefaultButton from 'src/Components/DefaultButton/DefaultButton';
import styles from './confirmFormBySms.module.scss'
import { setActiveConfirmation } from 'src/redux/reducers/registrationReducer/registrationReducer';
import { useAppDispatch } from 'src/redux/store';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/Routes/routes';
import PinInput from '../../PinInput/PinInput';
import { useEffect, useRef, useState } from 'react';

const initialDigits = ['', '', '', ''];

function ConfirmFormBySms() {

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


    return (
        <div className={styles.confirmForm}>
            <p className={styles.confirmForm__title}>Введите код</p>
            <p className={styles.confirmForm__subtitle}>
                Мы отправили код подтверждения на номер <br />
                +375 (44) 760 15 02
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
                onClick={() => navigate(ROUTES.home)}
                className={styles.confirmForm__btn}
            />
            <p className={styles.confirmForm__sms} onClick={() => dispatch(setActiveConfirmation({ type: 'phone' }))}>Запросить звонок</p>
        </div>
    )
}

export default ConfirmFormBySms;