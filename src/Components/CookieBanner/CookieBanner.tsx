import DefaultButton from '../DefaultButton/DefaultButton';
import styles from './cookieBanner.module.scss';
import { useCookies } from 'react-cookie';
import logo from '@assets/svg/logo.svg';

function CookieBanner() {

    const [cookies, setCookie] = useCookies(['cookieAccepted']);
    
    const handleAcceptCookie = () => {
        // Устанавливаем cookie на 1 год (365 дней)
        setCookie('cookieAccepted', true, { path: '/', maxAge: 365 * 24 * 60 * 60 });
    };

    return (
        <>
            {!cookies.cookieAccepted && (
                <div className={styles.cookieBanner}>
                    <div className={styles.cookieBanner__content}>
                        <div className={styles.cookieBanner__container}>
                            <p className={styles.cookieBanner__title}>Обработка файлов cookie</p>
                            <div className={styles.cookieBanner__wrap}>
                                <div className={styles.cookieBanner__info}>
                                    <img src={logo} alt="" />
                                    <div>
                                        <p className={styles.cookieBanner__text}>Мы используем файлы cookies для обеспечения удобства пользователей портала и предоставления персональных рекомендаций.</p>
                                        <p className={styles.cookieBanner__subtext}>Вы можете настроить файлы cookies или отключить их.</p>
                                    </div>
                                </div>
                                <div className={styles.cookieBanner__btns}>
                                    <DefaultButton
                                        text='Отклонить'
                                        type='secondary'
                                        onClick={handleAcceptCookie}
                                    />
                                    <DefaultButton
                                        text='Принять'
                                        type='primary'
                                        onClick={handleAcceptCookie}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CookieBanner;