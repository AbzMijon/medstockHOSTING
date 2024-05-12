import styles from './paymentsHistoryCard.module.scss';
import heartIcon from '@assets/svg/heartDefault.svg';
import heartActiveIcon from '@assets/svg/activeHeart.svg';
import { useState } from 'react';

type Props = {
    img: string;
    isFavorite: boolean;
    name: string;
    category: string;
    options: any[];
    count: number | string;
    sum: string;
};

function PaymentsHistoryCard({
    img,
    isFavorite,
    name,
    category,
    options,
    count,
    sum
}: Props) {
    const [favorite, setFavorite] = useState<boolean>(isFavorite || false);

    return (
        <div className={styles.paymentsHistoryCard}>
            <div className={styles.paymentsHistoryCard__img_wrap}>
                <img src={img} alt="" className={styles.paymentsHistoryCard__img} />
                {favorite ? (
                    <img src={heartActiveIcon} alt="" className={styles.paymentsHistoryCard__heart} onClick={() => setFavorite(false)} />
                ) : (
                    <img src={heartIcon} alt="" className={styles.paymentsHistoryCard__heart} onClick={() => setFavorite(true)} />
                )}
            </div>
            <div className={styles.paymentsHistoryCard__content}>
                <p className={styles.paymentsHistoryCard__title}>{name}</p>
                <p className={styles.paymentsHistoryCard__category}>{category}</p>
                    <ul className={styles.paymentsHistoryCard__list}>
                        {options && options?.length ? options?.map((item: any) => (
                            <li className={styles.paymentsHistoryCard__item}>
                                <input 
                                    type="checkbox" 
                                    className={styles.paymentsHistoryCard__checkbox} 
                                    id={item.id}
                                    checked
                                />
                                <label 
                                    htmlFor={item.id}
                                    className={styles.paymentsHistoryCard__checkbox_text}
                                >
                                    <img src={item?.src} alt="" className={styles.paymentsHistoryCard__item_img} />
                                    <p className={styles.paymentsHistoryCard__item_name}>{item?.title}</p>
                                </label>
                            </li>
                        )) 
                        : null}
                    </ul>
                <div className={styles.paymentsHistoryCard__footer}>
                    <div className={styles.paymentsHistoryCard__footer_item}>
                        <p className={styles.paymentsHistoryCard__footer_name}>Количество:</p>
                        <p className={styles.paymentsHistoryCard__footer_name}>{count}</p>
                    </div>
                    <div className={styles.paymentsHistoryCard__footer_item}>
                        <p className={styles.paymentsHistoryCard__footer_name}>Стоимость:</p>
                        <p className={styles.paymentsHistoryCard__footer_name}>{sum}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentsHistoryCard;