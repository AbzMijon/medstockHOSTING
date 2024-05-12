import { useState } from 'react';
import styles from './Selector.module.scss';
import arrowDown from '@assets/svg/miniArrowDown.svg';
import arrowUp from '@assets/svg/miniArrowUp.svg';

type Props = {
    activeItem: any;
    setActiveItem: any;
    data: any[];
    name: string;
    type: 'default' | 'transparent'
    className?: any;
};

function Selector({ activeItem, setActiveItem, data, name, className, type = 'default' }: Props) {

    const [open, setOpen] = useState<boolean>(false);

    const handleSelect = (item: any) => {
        setActiveItem(item);
        setOpen(false);
    }

    return (
        <div className={`${type === 'default' ? styles.selector : styles.selectorTransparent} ${className ? className : ''}`}>
            <div className={styles.selector__input} onClick={() => setOpen((prev: boolean) => !prev)}>
                <p className={styles.selector__input_title}>{activeItem?.title || name}</p>
                {open ? (
                    <img src={arrowUp} alt="" className={styles.selector__input_img} />
                ) : (
                    <img src={arrowDown} alt="" className={styles.selector__input_img} />
                )}
            </div>
            {data && open ? (
                <ul className={styles.selector__list}>
                    {data?.map((item: any) => (
                        <li 
                            className={styles.selector__item} 
                            key={item?.id}
                            onClick={() => handleSelect(item)}
                        >
                            {item?.title}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}

export default Selector;