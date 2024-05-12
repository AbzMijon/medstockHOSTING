import InputField from '@src/Components/Form/InputField/InputField';
import styles from './viewDeliveryForm.module.scss';
import DefaultButton from '@src/Components/DefaultButton/DefaultButton';

function ViewDeliveryForm() {
    return (
        <div className={styles.deliveryForm}>
            <div className={styles.deliveryForm__name}>
                <InputField
                    type='text'
                    placeholder='Имя'
                    className={styles.deliveryForm__field}
                />
                <InputField
                    type='text'
                    placeholder='Фамилия'
                    className={styles.deliveryForm__field}
                />
            </div>
            <InputField
                type='text'
                placeholder='Телефон'
                className={styles.deliveryForm__field}
            />
            <InputField
                type='text'
                placeholder='Город'
                className={styles.deliveryForm__field}
            />
            <div className={styles.deliveryForm__street}>
                <InputField
                    type='text'
                    placeholder='Улица'
                    className={styles.deliveryForm__field}
                />
                <InputField
                    type='text'
                    placeholder='Дом'
                    className={styles.deliveryForm__field}
                />
                <InputField
                    type='text'
                    placeholder='Корпус'
                    className={styles.deliveryForm__field}
                />
                <InputField
                    type='text'
                    placeholder='Подъезд'
                    className={styles.deliveryForm__field}
                />
                <InputField
                    type='text'
                    placeholder='Этаж'
                    className={styles.deliveryForm__field}
                />
                <InputField
                    type='text'
                    placeholder='Квартира'
                    className={styles.deliveryForm__field}
                />
            </div>
            <DefaultButton
                type='primary'
                text='Сохранить изменения'
                onClick={() => null}
                className={styles.deliveryForm__btn}
            />
        </div>
    )
}

export default ViewDeliveryForm;