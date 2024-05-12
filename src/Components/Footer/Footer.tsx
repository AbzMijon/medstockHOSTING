import styles from './footer.module.scss';
import mailIcon from '@assets/svg/email.svg';
import instIcon from '@assets/svg/insta.svg';
import facebookIcon from '@assets/svg/facebook.svg';
import linkedinIcon from '@assets/svg/linkedin.svg';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__up}>
                <div className={styles.footer__mainContent}>
                    <ul className={styles.footer__list}>
                        <li className={styles.footer__item}>
                            <p className={styles.footer__item_title}>Покупателям</p>
                            <p className={styles.footer__item_text}>Доставка</p>
                            <p className={styles.footer__item_text}>Оплата</p>
                        </li>
                        <li className={styles.footer__item}>
                            <p className={styles.footer__item_title}>Ответственность</p>
                            <p className={styles.footer__item_text}>Гарантия</p>
                            <p className={styles.footer__item_text}>Возврат и обмен</p>
                        </li>
                        <li className={styles.footer__item}>
                            <p className={styles.footer__item_title}>Компания</p>
                            <p className={styles.footer__item_text}>Пользовательское соглашение</p>
                            <p className={styles.footer__item_text}>Политика конфиденциальности</p>
                        </li>
                        <li className={styles.footer__item}>
                            <p className={styles.footer__item_title}>Контакты</p>
                            <p className={styles.footer__item_text}>+375 (44) 760 15 02</p>
                            <p className={styles.footer__item_text}>shop@medstok.by</p>
                        </li>
                        <li className={styles.footer__item}>
                            <p className={styles.footer__item_title}>Инфополе</p>
                            <p className={styles.footer__item_text}>Блог</p>
                            <div className={styles.footer__social}>
                                <img src={instIcon} alt="" className={styles.footer__social_img} />
                                <img src={facebookIcon} alt="" className={styles.footer__social_img} />
                                <img src={linkedinIcon} alt="" className={styles.footer__social_img} />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer__message}>
                    <img src={mailIcon} alt="" />
                </div>
            </div>
            <div className={styles.footer__copyright}>
                <p className={styles.footer__copyright_text}>Copyright © 2024 Medstok</p>
            </div>
        </footer>
    )
}

export default Footer;