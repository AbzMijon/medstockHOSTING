import { useState } from 'react';
import styles from './InputFieldWithSelector.module.scss';
import miniArrowDown from '@assets/svg/miniArrowDown.svg';

type Props = {
    list: any[];
    activeListItem: any;
    className?: any;
}

function InputFieldWithSelector({ list, activeListItem, className }: Props) {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={`${styles.inputFieldWithSelector} ${open ? styles.inputFieldWithSelectorOpen : ''} ${className ? className : ''}`}>
            <div className={styles.inputFieldWithSelector__selector} onClick={() => setOpen((prev: boolean) => !prev)}>
                <img src={activeListItem?.icon} alt="" className={styles.inputFieldWithSelector__flag} />
                <img src={miniArrowDown} alt="" className={styles.inputFieldWithSelector__arrow} />
            </div>
            {open && list?.length && (
                <div className={styles.inputFieldWithSelector__list}>
                    {list?.map((item: any) => (
                        <div className={styles.inputFieldWithSelector__item}>
                            <img src={item?.icon} alt="" className={styles.inputFieldWithSelector__item_flag} />
                            <p className={styles.inputFieldWithSelector__item_title}>{item?.title}</p>
                        </div>
                    ))}
                </div>
            )}
            <input 
                type="text"
                className={styles.inputFieldWithSelector__input}
            />
        </div>
    )
}

export default InputFieldWithSelector;