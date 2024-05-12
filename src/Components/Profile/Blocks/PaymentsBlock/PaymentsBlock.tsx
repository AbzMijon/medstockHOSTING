import { PROFILE_PAYMENTS_CARDS } from '@src/constants';
import styles from './paymentsBlock.module.scss';
import visaIcon from '@assets/img/visa.png';
import paymentIcon from '@assets/svg/payment.svg';

function PaymentsBlock() {
    return (
        <div className={styles.paymentsBlock}>
            <p className={styles.paymentsBlock__title}>Способы оплаты</p>
            <ul className={styles.paymentsBlock__cards}>
                {PROFILE_PAYMENTS_CARDS && PROFILE_PAYMENTS_CARDS?.map((card: any) => (
                    <li className={styles.paymentsBlock__card}>
                        <img src={visaIcon} alt="" className={styles.paymentsBlock__card_icon} />
                        <div className={styles.paymentsBlock__card_data}>
                            <p className={styles.paymentsBlock__card_number}>{card.number}</p>
                            <p className={styles.paymentsBlock__card_name}>{card.name}</p>
                        </div>
                    </li>
                ))}
                <li className={styles.paymentsBlock__addCard}>
                    <img src={paymentIcon} alt="" className={styles.paymentsBlock__addCard_icon} />
                    <p className={styles.paymentsBlock__addCard_title}>Привязать карту</p>
                </li>
            </ul>
        </div>
    )
}

export default PaymentsBlock;