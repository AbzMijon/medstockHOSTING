import { useState } from 'react';
import styles from './accordionComments.module.scss';
import Selector from '../Filters/Selector/Selector';
import ReviewCard from '../Cards/ReviewCard/ReviewCard';
import StarRating from '../StarRating/StarRating';

type Props = {
    data: any[];
    rating: number;
    totalReviews: string;
    name: string;
};

function AccordionComments({ data, rating, totalReviews, name }: Props) {

    const [open, setOpen] = useState<boolean>(false);
    const [sort, setSort] = useState<any>(null);

    return (
        <div className={styles.accordion}>
            <div className={styles.accordion__initial} onClick={() => setOpen((prev: boolean) => !prev)}>
                <p className={styles.accordion__title}>Отзывы</p>
                <div className={styles.accordion__rating}>
                    <span>{rating}</span>
                    <StarRating filledStars={rating}  />
                </div>
            </div>
            {open ? (
                <>
                    <div className={styles.accordion__filter}>
                        <p className={styles.accordion__reviews_count}>{totalReviews}</p>
                        <Selector
                            activeItem={sort}
                            setActiveItem={setSort}
                            data={[ 
                                { id: 0, title: 'Новинки' }, 
                                { id: 1, title: 'Сперва дорогие' }, 
                                { id: 2, title: 'Сперва дешевые' }, 
                                { id: 3, title: 'По рейтингу' }, 
                            ]}
                            name={'Сортировка'}
                            type={'transparent'}
                            className={styles.accordion__sort}
                        />
                    </div>
                    <ul className={styles.accordion__list}>
                        {data?.map((item: any) => (
                            <ReviewCard
                                name={item.name}
                                date={item.date}
                                rating={item.rating}
                                item={name}
                                text={item.text}
                                answer={item?.answer}
                            />
                        ))}
                    </ul>
                </>
            ) : null}
        </div>
    )
}

export default AccordionComments;