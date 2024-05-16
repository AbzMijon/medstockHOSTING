import { PAYMENTS_WAYS } from '@src/constants';
import styles from './paymentPage.module.scss';
import DefaultButton from '@src/Components/DefaultButton/DefaultButton';

function PaymentPage() {
    return (
        <div className={styles.paymentPage}>
            <ul className={styles.paymentPage__cards}>

            </ul>
            <div className={styles.paymentPage__container}>
                <div className={styles.paymentPage__info}>
                    <p className={styles.paymentPage__info_title}>Общество с ограниченной ответственностью «МедСток»</p>
                    <p className={styles.paymentPage__info_title}>УНП 193686400</p>
                    <p className={styles.paymentPage__info_title}>BY14 MTBK 3012 0001 0933 0012 0002 BYN</p>
                    <p className={styles.paymentPage__info_title}>220062, г. Минск, ул. Тимирязева, д.121/3, пом.39.</p>
                    <p className={styles.paymentPage__info_title}>МФО/БИК 153001117</p>
                    <p className={styles.paymentPage__info_title}>SWIFT MTBKBY22</p>
                    <p className={styles.paymentPage__info_title}>Адрес для корреспонденции: 220030, г. Минск, ул. Октябрьская, д.5, пом.106</p>
                </div>
                <div className={styles.paymentPage__ways}>
                    <p className={styles.paymentPage__ways_title}>Доступные способы оплаты</p>
                    <ul className={styles.paymentPage__ways_list}>
                        {PAYMENTS_WAYS && PAYMENTS_WAYS?.map((way: any) => (
                            <li className={styles.paymentPage__ways_item}>
                                <div className={styles.paymentPage__wats_miniBtn}>
                                    <img src={way.icon} alt="" />
                                </div>
                                <DefaultButton
                                    type='secondary'
                                    text={way.title}
                                    onClick={() => null}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage;