import DefaultButton from 'src/Components/DefaultButton/DefaultButton';
import styles from './confirmFormOldLink.module.scss';

function ConfirmFormOldLink() {

    const handleClick = () => {
        window.history.back();
    };

    return (
        <div className={styles.confirmForm}>
            <p className={styles.confirmForm__title}>Ссылка устарела</p>
            <div>
                <p className={styles.confirmForm__subtitle}>Если вы уже регистрировались на Компании, войдите заново по почте или телефону</p>
                <p className={styles.confirmForm__subtitle}>Если вы перешли по приглашению, попросите ссылку у администратора</p>
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

export default ConfirmFormOldLink