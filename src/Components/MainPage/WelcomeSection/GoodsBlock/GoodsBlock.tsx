import { useAppDispatch } from '@src/redux/store';
import styles from './GoodsBlock.module.scss';
import { useSelector } from 'react-redux';
import { activeGoodSelector, goodsSelector } from 'src/redux/reducers/mainPageReducer/mainPageSelector';
import { setActiveGood } from '@src/redux/reducers/mainPageReducer/mainPageReducer';

function GoodsBlock() {

    const goods = useSelector(goodsSelector);
    const dispatch = useAppDispatch();
    const activeGood = useSelector(activeGoodSelector);
    const nextActiveGood = goods?.[activeGood?.id + 1];

    const handleClickGood = (id: number | null) => {
        dispatch(setActiveGood({ id }))
    }

    return (
        <div className={styles.goods}>
            {activeGood ? (
                <div className={styles.goods__activeBlock}>
                    <div 
                        className={styles.goods__item_active} 
                        onClick={() => handleClickGood(null)}
                        style={{ backgroundColor: activeGood?.bg, color: activeGood?.color }}
                    >
                        <p className={styles.goods__item_title}>{activeGood?.title}</p>
                        <img src={activeGood?.img} alt="" className={styles.goods__item_img} />
                    </div>
                    <div 
                        className={styles.goods__item_next} 
                        onClick={() => handleClickGood(nextActiveGood?.id)}
                        style={{ backgroundColor: nextActiveGood?.bg, color: nextActiveGood?.color }}
                    />
                </div>
            ) : (
                <ul className={styles.goods__list}>
                    {goods && goods?.map((good: any) => (
                        <li 
                            className={styles.goods__item}
                            key={good?.id} 
                            onClick={() => handleClickGood(good.id)}
                        >
                            <p className={styles.goods__item_title}>{good?.title}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default GoodsBlock;