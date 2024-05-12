import { useState } from 'react';
import styles from './CheckboxSelector.module.scss';
import arrowDown from '@assets/svg/miniArrowDown.svg';
import arrowUp from '@assets/svg/miniArrowUp.svg';

type CheckboxItem = {
    id: number;
    title: string;
    count: number;
};

type Props = {
    title: string;
    data: CheckboxItem[];
};

function CheckboxSelector({ title, data }: Props) {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={styles.checkboxSelector}>
            <div className={styles.checkboxSelector__input} onClick={() => setOpen((prev: boolean) => !prev)}>
                <p className={styles.checkboxSelector__title}>{title}</p>
                {open ? (
                    <img src={arrowUp} alt="" className={styles.checkboxSelector__arrow} />
                ) : (
                    <img src={arrowDown} alt="" className={styles.checkboxSelector__arrow} />
                )}
            </div>
            {open ? (
                <ul className={styles.checkboxSelector__list}>
                    {data?.map((item: CheckboxItem) => (
                        <li className={styles.checkboxSelector__item} key={item?.id}>
                            <div className={styles.checkboxSelector__item_input}>
                                <input 
                                    type="checkbox" 
                                    className={styles.checkboxSelector__checkbox} 
                                    id={item.title}
                                />
                                <label 
                                    htmlFor={item.title}
                                    className={styles.checkboxSelector__checkbox_text}
                                >
                                    {item?.title}
                                </label>
                            </div>
                            <span className={styles.checkboxSelector__count}>{item?.count}</span>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}

export default CheckboxSelector;