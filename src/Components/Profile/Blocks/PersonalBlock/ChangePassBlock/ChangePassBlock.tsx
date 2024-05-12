import InputField from '@src/Components/Form/InputField/InputField';
import styles from './changePassBlock.module.scss';
import DefaultButton from '@src/Components/DefaultButton/DefaultButton';

type Props = {
    setIsChagePassBlock: any;
};

function ChangePassBlock({ setIsChagePassBlock }: Props) {
    return (
        <div className={styles.changePassBlock}>
            <p className={styles.changePassBlock__title}>Изменить пароль</p>
            <div className={styles.changePassBlock__form}>
                <InputField
                    placeholder='Текущий пароль'
                    type='password'
                    className={styles.changePassBlock__field}
                    id='currentPass'
                />
                <InputField
                    placeholder='Новый пароль'
                    type='password'
                    className={styles.changePassBlock__field}
                />
                <div className={styles.changePassBlock__item_input}>
                    <input 
                        type="checkbox" 
                        className={styles.changePassBlock__checkbox} 
                        id={'passwordConfirm'}
                    />
                    <label 
                        htmlFor={'passwordConfirm'}
                        className={styles.changePassBlock__checkbox_text}
                    >
                        Пароль должен быть не менее 8 символов
                    </label>
                </div>
                <DefaultButton
                    text='Сохранить пароль'
                    type='primary'
                    onClick={() => setIsChagePassBlock(false)}
                    className={styles.changePassBlock__btn}
                />
            </div>
        </div>
    )
}

export default ChangePassBlock;