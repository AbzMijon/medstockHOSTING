import styles from './confirmationPage.module.scss';
import phoneImg from '@assets/img/Mockup.png';
import ConfirmationChangeBlock from './ConfirmationChangeBlock';

function ConfirmationPage() {
    return (
        <div className={styles.confirmationPage}>
            <img src={phoneImg} alt="" className={styles.confirmationPage__img} />
            <ConfirmationChangeBlock />
        </div>
    )
}

export default ConfirmationPage;