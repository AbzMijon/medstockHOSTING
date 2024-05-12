import { useAppDispatch } from 'src/redux/store';
import styles from './modalSelectCountry.module.scss';
import { removeModalByName } from 'src/redux/reducers/modalReducer/modalReducer';
import closeIcon from '@assets/svg/delete.svg';
import SearchInput from '@src/Components/Form/SearchInput/SearchInput';
import { useState } from 'react';
import { CITIES_FOR_MODAL } from '@src/constants';

function ModalSelectCountry() {

    const dispatch = useAppDispatch();
    const [selectedCity, setSelectedCity] = useState<{ id: number, title: string } | null>(null);

    const handleCloseModal = () => {
        dispatch(removeModalByName({ modalName: 'modal-select-country' }));
    };

    return (
        <div className={styles.modalSelectCountry}>
            <div className={styles.modalSelectCountry__close} onClick={handleCloseModal}>
                <img src={closeIcon} alt="" className={styles.modalSelectCountry__close_icon} />
            </div>
            <div className={styles.modalSelectCountry__body}>
                <p className={styles.modalSelectCountry__title}>Выберите Ваш город</p>
                <SearchInput />
                <ul className={styles.modalSelectCountry__list}>
                    {CITIES_FOR_MODAL && CITIES_FOR_MODAL?.map((city: { id: number, title: string }) => (
                        <li className={styles.modalSelectCountry__city} onClick={() => setSelectedCity(city)}>
                            <input 
                                type="radio" 
                                id={String(city.id)}
                                className={styles.modalSelectCountry__input} 
                                checked={selectedCity?.id === city.id}
                            />
                            <label htmlFor={String(city.id)} className={styles.modalSelectCountry__name}>{city.title}</label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ModalSelectCountry;