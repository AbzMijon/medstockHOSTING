import InputField from '@src/Components/Form/InputField/InputField';
import styles from './personalInfoBlock.module.scss';
import DefaultButton from '@src/Components/DefaultButton/DefaultButton';

type Props = {
    setIsChagePassBlock: any;
};

function PersonalInfoBlock({ setIsChagePassBlock }: Props) {
    return (
        <div className={styles.personalInfoBlock}>
            <p className={styles.personalInfoBlock__title}>Личный кабинет</p>
            <div className={styles.personalInfoBlock__form}>
                <div className={styles.personalInfoBlock__name}>
                    <InputField
                        placeholder='Имя'
                        type='text'
                        className={styles.personalInfoBlock__field}
                        />
                    <InputField
                        placeholder='Фамилия'
                        type='text'
                        className={styles.personalInfoBlock__field}
                    />
                </div>
                <InputField
                    placeholder='E-mail'
                    type='email'
                    className={styles.personalInfoBlock__field}
                />
                <div className={styles.personalInfoBlock__pass}>
                    <div className={styles.personalInfoBlock__field_pass}>
                        <InputField
                            placeholder='Пароль'
                            type='password'
                            className={styles.personalInfoBlock__field_pass_input}
                            disabled={true}
                        />
                    </div>
                    <p className={styles.personalInfoBlock__change} onClick={() => setIsChagePassBlock(true)}>Изменить</p>
                </div>
                <DefaultButton
                    text='Сохранить изменения'
                    type='primary'
                    onClick={() => setIsChagePassBlock(false)}
                    className={styles.personalInfoBlock__btn}
                />
            </div>
        </div>
    )
}

export default PersonalInfoBlock;