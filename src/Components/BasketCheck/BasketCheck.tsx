import DefaultButton from '../DefaultButton/DefaultButton';
import styles from './basketCheck.module.scss';

function BasketCheck() {
    return (
        <div className={styles.basketCheck}>
            <div className={styles.basketCheck__info}>
                <p className={styles.basketCheck__title}>Сумма заказа</p>
                <div className={styles.basketCheck__row}>
                    <p>Скидка</p>
                    <p>-25 BYN</p>
                </div>
                <div className={styles.basketCheck__row}>
                    <p>НДС 20%</p>
                    <p>82 BYN</p>
                </div>
                <div className={styles.basketCheck__row}>
                    <p>Сумма без НДС</p>
                    <p>328 BYN</p>
                </div>
            </div>
            <div className={styles.basketCheck__total}>
                <div className={styles.basketCheck__totalNames}>
                    <p>Итого</p>
                    <p>400 000 BYN</p>
                </div>
                <DefaultButton
                    type='primary'
                    text='Оформить заказ'
                    onClick={() => null}
                    className={styles.basketCheck__btn}
                />
            </div>
        </div>
    )
}

export default BasketCheck;