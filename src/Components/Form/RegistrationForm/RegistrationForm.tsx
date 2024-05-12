import { useSelector } from 'react-redux';
import DefaultButton from '../../DefaultButton/DefaultButton';
import InputField from '../InputField/InputField';
import InputFieldWithSelector from '../InputFieldWithSelector/InputFieldWithSelector';
import styles from './RegistrationForm.module.scss';
import logo from '@assets/svg/logoMedstock.svg';
import { activeCountrySelector, countriesSelector } from 'src/redux/reducers/registrationReducer/registrationSelector';
import { SOCIAL_IN_MAIN_PAGE } from 'src/constants';
import { useState } from 'react';
import { setActiveForm } from 'src/redux/reducers/registrationReducer/registrationReducer';
import { useAppDispatch } from 'src/redux/store';
import { ROUTES } from 'src/Routes/routes';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {

    const countries = useSelector(countriesSelector);
    const activeCountry = useSelector(activeCountrySelector);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [isCheckboxActive, setIsCheckboxActive] = useState<boolean>(false);

    return (
        <div className={styles.registrationForm}>
            <p className={styles.registrationForm__title}>
                Регистрация на
                <img src={logo} alt="" className={styles.registrationForm__logo} />
            </p>
            <div className={styles.registrationForm__nameAndSurname}>
                <InputField 
                    placeholder='Имя' 
                    className={styles.registrationForm__input} 
                    type='text' 
                />
                <InputField 
                    placeholder='Фамилия' 
                    className={styles.registrationForm__input} 
                    type='text' 
                />
            </div>
            <InputFieldWithSelector
                list={countries}
                activeListItem={activeCountry}
            />
            <div className={styles.registrationForm__checkbox_wrap}>
                <input 
                    type="checkbox" 
                    className={styles.registrationForm__checkbox} 
                    id='checkbox'
                />
                <label 
                    htmlFor="checkbox" 
                    className={styles.registrationForm__checkbox_text}
                >
                    <p>
                        Я согласен с <span>Условиями использования</span> Medstok и <span>Политикой конфиденциальности</span>
                    </p>
                </label>
            </div>
            <DefaultButton 
                text='Cоздать аккаунт'
                type='primary'
                onClick={() => navigate(ROUTES.verification)}
                className={styles.registrationForm__btn}
            />
            <div className={styles.registrationForm__variants}>
                <p className={styles.registrationForm__variants_title}>Или воспользуйтесь:</p>
                <ul className={styles.registrationForm__variants_list}>
                    {SOCIAL_IN_MAIN_PAGE && SOCIAL_IN_MAIN_PAGE?.map((social: any ) => (
                        <li className={styles.registrationForm__variants_item} onClick={() => dispatch(setActiveForm({ type: social?.type }))}>
                            <img src={social?.icon} alt="" className={styles.registrationForm__variants_img} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RegistrationForm;