import styles from './switchBlock.module.scss';
import { useAppDispatch } from 'src/redux/store';
import { useSelector } from 'react-redux';
import { switchDataSelector } from 'src/redux/reducers/mainPageReducer/mainPageSelector';
import { setNewSwitchData } from 'src/redux/reducers/mainPageReducer/mainPageReducer';

function SwitchBlock() {

    const dispatch = useAppDispatch();
    const switchData = useSelector(switchDataSelector)

    return (
        <div className={styles.switch}>
            {switchData && switchData?.map((switchCard: any, index: number) => (
                <div className={index !== 1 ? styles.switch__card : styles.switch__card_active} onClick={() =>  dispatch(setNewSwitchData({ index }))}>
                    <div className={styles.switch__icon}>
                        <img src={switchCard?.icon} alt="" />
                    </div>
                    <p className={styles.switch__title}>{switchCard?.title}</p>
                </div>
            ))}
        </div>
    )
}

export default SwitchBlock;