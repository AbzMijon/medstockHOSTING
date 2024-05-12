import { useAppDispatch } from 'src/redux/store';
import styles from './modalItemOptions.module.scss';
import { removeModalByName } from 'src/redux/reducers/modalReducer/modalReducer';
import closeIcon from '@assets/svg/delete.svg';
import DefaultButton from 'src/Components/DefaultButton/DefaultButton';
import searchIcon from '@assets/svg/search.svg';
import { useSelector } from 'react-redux';
import { modalItemOptions } from 'src/redux/reducers/modalReducer/modalSelector';
import ItemOptionCard from 'src/Components/Cards/ItemOptionCard/ItemOptionCard';

function ModalItemOptions() {

    const dispatch = useAppDispatch();
    const options = useSelector(modalItemOptions);

    const handleCloseModal = () => {
        dispatch(removeModalByName({ modalName: 'modal-items-options' }));
    };

    return (
        <div className={styles.modalItemOptions}>
            <div className={styles.modalItemOptions__close} onClick={handleCloseModal}>
                <img src={closeIcon} alt="" className={styles.modalItemOptions__close_icon} />
            </div>
            <p className={styles.modalItemOptions__title}>Выбранные опции</p>
            <p className={styles.modalItemOptions__subtitle}>Выберите дополнительные опции, чтобы достичь максимального комфорта для ваших пациентов</p>
            <ul className={styles.modalItemOptions__list}>
                {options && options?.length ? options?.map((option: any) => (
                    <ItemOptionCard option={option} />
                )) : null}
            </ul>
            <div className={styles.modalItemOptions__total}>
                <p className={styles.modalItemOptions__total_title}>Стоимость комплекта</p>
                <p className={styles.modalItemOptions__total_sum}>7245 руб</p>
            </div>
            <DefaultButton
                text='Добавить в корзину'
                type='primary'
                onClick={handleCloseModal}
                icon={searchIcon}
                className={styles.modalItemOptions__btn}
            />
        </div>
    )
}

export default ModalItemOptions;