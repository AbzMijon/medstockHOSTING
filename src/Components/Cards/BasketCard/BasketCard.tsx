import styles from './basketCard.module.scss';
import heartIcon from '@assets/svg/heartDefault.svg';
import heartActiveIcon from '@assets/svg/activeHeart.svg';
import trashIcon from '@assets/svg/trash.svg';
import { useState } from 'react';
import { setItemOptions, setMessageModal, setModalByName } from 'src/redux/reducers/modalReducer/modalReducer';
import { useAppDispatch } from 'src/redux/store';
import { useSelector } from 'react-redux';
import { isAuthSelector } from '@src/redux/reducers/authReducer/authSelector';

type Props = {
    img: string;
    isFavorite: boolean;
    name: string;
    category: string;
    options: any[];
    count: number | string;
    sum: string;
};

function BasketCard({
    img,
    isFavorite,
    name,
    category,
    options,
    count,
    sum
}: Props) {

    const [favorite, setFavorite] = useState<boolean>(isFavorite || false);
    const [counter, setCounter] = useState<number>(+count);
    const dispatch = useAppDispatch();
    const selectedOptions = options?.filter((option: any) => option?.select)
    const isAuth = useSelector(isAuthSelector);

    const handlePlusCount = () => {
        setCounter((prev: number) => prev + 1);
    };

    const handleMinusCount = () => {
        if(counter > 1) {
            setCounter((prev: number) => prev - 1);
        }
    };

    const handleOpenOptions = (options: any[]) => {
        dispatch(setModalByName({ isModalActive: true, modalName: 'modal-items-options', withDarkOverlay: true }));
        dispatch(setItemOptions({ options }));
    };

    const handleFavorite = (isFavorite: boolean) => {
        if(isAuth) {
            setFavorite(isFavorite);
        }   else {
            dispatch(setModalByName({ isModalActive: true, modalName: 'modal-message', withDarkOverlay: true }));
            dispatch(setMessageModal({ message: 'Что бы добавить товар в избранное вам нужно зарегестрироваться' }));
        }
    };

    return (
        <div className={styles.basketCard}>
            <div className={styles.basketCard__img_wrap}>
                <img src={img} alt="" className={styles.basketCard__img} />
                {favorite ? (
                    <img src={heartActiveIcon} alt="" className={styles.basketCard__heart} onClick={() => handleFavorite(false)} />
                ) : (
                    <img src={heartIcon} alt="" className={styles.basketCard__heart} onClick={() => handleFavorite(true)} />
                )}
            </div>
            <div className={styles.basketCard__content}>
                <div className={styles.basketCard__title_and_delete}>
                    <p className={styles.basketCard__title}>{name}</p>
                    <div className={styles.basketCard__delete}>
                        <img src={trashIcon} alt="" className={styles.basketCard__delete_img} />
                    </div>
                </div>
                <p className={styles.basketCard__category}>{category}</p>
                <p className={styles.basketCard__more} onClick={() => handleOpenOptions(options)}>Подробнее</p>
                    <ul className={styles.basketCard__list}>
                        {selectedOptions && selectedOptions?.length ? selectedOptions?.map((item: any) => (
                            <li className={styles.basketCard__item}>
                                <button className={styles.basketCard__item_delete}>-</button>
                                <img src={item?.src} alt="" className={styles.basketCard__item_img} />
                                <p className={styles.basketCard__item_name}>{item?.title}</p>
                            </li>
                        )) 
                        : null}
                    </ul>
                <div className={styles.basketCard__footer}>
                    <div className={styles.basketCard__counter}>
                        <button className={styles.basketCard__counter_btn} onClick={handleMinusCount}>-</button>
                        <div className={styles.basketCard__count}>{counter}</div>
                        <button className={styles.basketCard__counter_btn} onClick={handlePlusCount}>+</button>
                    </div>
                    <div className={styles.basketCard__total}>
                        <p className={styles.basketCard__ndc}>включая НДС</p>
                        <p className={styles.basketCard__sum}>{sum}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketCard;