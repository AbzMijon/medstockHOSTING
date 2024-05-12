import DefaultButton from 'src/Components/DefaultButton/DefaultButton';
import styles from './confirmFormByEmail.module.scss';

function ConfirmFormByEmail() {

    const handleClick = () => {
        window.history.back();
    };

    return (
        <div className={styles.confirmForm}>
            <p className={styles.confirmForm__title}>Подтвердите почту</p>
            <div>
                <p className={styles.confirmForm__subtitle}>Пожалуйста, активируйте свою учетную запись Medsotck, перейдя по ссылке в электронном письме, которое мы только что отправили на вашу почту</p>
            </div>
            <DefaultButton
                text='Назад'
                type='primary'
                onClick={handleClick}
                className={styles.confirmForm__btn}
            />
        </div>
    )
}

export default ConfirmFormByEmail;