import styles from './RegistrationPage.module.scss';
import registrImg1 from '@assets/img/registrationImg1.png';
import RegistrationChangeFormBlock from './RegistrationChangeFormBlock';
import { useEffect } from 'react';
import { useAppDispatch } from 'src/redux/store';
import { setDefaultRegistrationData } from 'src/redux/reducers/registrationReducer/registrationReducer';

function RegistrationPage() {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setDefaultRegistrationData());
    }, [])

    return (
        <div className={styles.registrationPage}>
            <img src={registrImg1} alt="" className={styles.registrationPage__img} />
            <RegistrationChangeFormBlock />
        </div>
    )
}

export default RegistrationPage;