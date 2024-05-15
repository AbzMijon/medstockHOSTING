import DefaultButton from 'src/Components/DefaultButton/DefaultButton';
import styles from './basketPage.module.scss';
import BasketCard from 'src/Components/Cards/BasketCard/BasketCard';
import { useSelector } from 'react-redux';
import { basketCardsSelector } from 'src/redux/reducers/basketReducer/basketSelector';
import BasketCheck from 'src/Components/BasketCheck/BasketCheck';
import NoDataBlock from '@src/Components/NoDataBlock/NoDataBlock';

function BasketPage() {

    const basketCards = useSelector(basketCardsSelector);

    return (
        <div className={styles.basketPage}>
            <div className={styles.basketPage__container}>
                <div className={styles.basketPage__header}>
                    <p className={styles.basketPage__header_title}>Корзина</p>
                    <p className={styles.basketPage__header_itemsCount}>21 товар в заказе</p>
                </div>
                {basketCards && basketCards?.length ? (
                    <div className={styles.basketPage__body}>
                        <div className={styles.basketPage__items}>
                            {basketCards.map((item: any) => (
                                <BasketCard
                                    img={item.img}
                                    isFavorite={item.favorite}
                                    name={item.title}
                                    category={item.category}
                                    options={item.options}
                                    count={item.count}
                                    sum={item.sum}
                                />
                            ))}
                        </div>
                        <BasketCheck />
                        <div className={styles.basketPage__totalMobile}>
                            <div className={styles.basketPage__totalNamesMobile}>
                                <p>Итого</p>
                                <p>400 000 BYN</p>
                            </div>
                            <DefaultButton
                                type='primary'
                                text='Оформить заказ'
                                onClick={() => null}
                                className={styles.basketPage__btnMobile}
                            />
                        </div>
                    </div>
                ) : (
                    <NoDataBlock 
                        title='У вас пустая корзина' 
                        text='Добавляйте товары, которые вы находите на Medstok и делитесь ими с близкими людьми.' 
                    />
                )}
            </div>
        </div>
    )
}

export default BasketPage;