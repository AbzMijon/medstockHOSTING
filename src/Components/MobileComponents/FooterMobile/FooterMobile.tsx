import styles from './footerMobile.module.scss';
import instIcon from '@assets/svg/insta.svg';
import facebookIcon from '@assets/svg/facebook.svg';
import linkedinIcon from '@assets/svg/linkedin.svg';
import { FOOTER_DATA } from '@src/constants';
import BigAccordion from '../BigAccordion/BigAccordion';
import locationIcon from '@assets/svg/location.svg';

function FooterMobile() {
    return (
        <footer className={styles.footerMobile}>
                <div className={styles.footerMobile__mainContent}>
                    <ul className={styles.footerMobile__list}>
                        {FOOTER_DATA && FOOTER_DATA?.map((item: any) => (
                            <BigAccordion
                                id={item.id}
                                title={item.title}
                                data={item.data}
                            />
                        ))}
                        <li className={styles.footerMobile__item}>
                            <div className={styles.footerMobile__social}>
                                <img src={instIcon} alt="" className={styles.footerMobile__social_img} />
                                <img src={facebookIcon} alt="" className={styles.footerMobile__social_img} />
                                <img src={linkedinIcon} alt="" className={styles.footerMobile__social_img} />
                            </div>
                        </li>
                        <li className={styles.footerMobile__item}>
                            <div className={styles.footerMobile__location}>
                                <img src={locationIcon} alt="" />
                                <p className={styles.footerMobile__location_title}>Москва</p>
                            </div>
                        </li>
                        <li className={styles.footerMobile__item}>
                            <p className={styles.footerMobile__item_text}>Copyright © 2024 Medstok</p>
                        </li>
                    </ul>
                </div>
        </footer>
    )
}

export default FooterMobile