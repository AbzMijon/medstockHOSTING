import styles from './InputField.module.scss';
import openEye from '@assets/svg/eye.svg';
import closeEye from '@assets/svg/eye_off.svg';
import crossIcon from '@assets/svg/cross.svg';
import { useState } from 'react';

type Props = {
    placeholder: string;
    type: string
    value: any;
    setValue: any;
    id?: string;
    disabled?: any;
    className?: any;
}

function InputField({ placeholder, type, value, setValue, className, id, disabled }: Props) {

    const [passwordView, setPasswordView] = useState<boolean>(true);

    return (
        <div className={`${styles.inputField} ${className ? className : ''}`}>
            <input
                id={id || 'field'}
                type={type === 'password' && !passwordView ? 'text' : type}
                className={styles.inputField__input}
                placeholder={placeholder}
                value={value}
                onChange={(e: any) => setValue(e.target.value)}
                disabled={disabled}
            />
            <label htmlFor={'field'} className={styles.inputField__label}>{placeholder}</label>

            {type === 'password' ? (
                <div className={styles.inputField__icon} onClick={() => setPasswordView((prev: boolean) => !prev)}>
                    {passwordView ? <img src={closeEye} alt="" /> : <img src={openEye} alt="" /> }
                </div>
            ): null}

            {value ? (
                <img src={crossIcon} alt="" className={styles.inputField__icon} onClick={() => setValue('')} />
            ) : null}
        </div>
    )
}

export default InputField;