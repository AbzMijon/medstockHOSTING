import styles from './viewPurchase.module.scss';
import StatusCell from '../StatusCell/StatusCell';
import { useSelector } from 'react-redux';
import { profileCurrentClickedDataInTableSelector } from '@src/redux/reducers/personalProfileReducer/personalProfileSelector';
import PaymentsHistoryCard from '@src/Components/Cards/PaymentsHistoryCard/PaymentsHistoryCard';
import { PAYMENTS_HISTORY_ITEMS } from '@src/constants';
import { setCurrentClickedData } from '@src/redux/reducers/personalProfileReducer/personalProfileReducer';
import { useAppDispatch } from '@src/redux/store';

function ViewPurchase() {

    const currentTableDataClicked = useSelector(profileCurrentClickedDataInTableSelector);
    const dispatch = useAppDispatch();

    return (
        <div className={styles.viewPurchase}>
            <div className={styles.viewPurchase__head} onClick={() => dispatch(setCurrentClickedData({ data: null }))}>
                <p className={styles.viewPurchase__order}>{currentTableDataClicked?.order}</p>
                <p className={styles.viewPurchase__date}>{currentTableDataClicked?.created_at}</p>
                <StatusCell data={{ status: currentTableDataClicked?.status }}/>
            </div>
            <div className={styles.viewPurchase__list}>
                {PAYMENTS_HISTORY_ITEMS && PAYMENTS_HISTORY_ITEMS?.map((purchase: any) => (
                    <PaymentsHistoryCard
                        img={purchase.img}
                        isFavorite={purchase.favorite}
                        name={purchase.name}
                        category={purchase.category}
                        options={purchase.selectedOptions}
                        count={purchase.count}
                        sum={purchase.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default ViewPurchase