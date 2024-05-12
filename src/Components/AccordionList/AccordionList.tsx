import { useState } from 'react';
import styles from './accordionList.module.scss';
import arrowDown from '@assets/svg/arrowDown.svg';
import arrowUp from '@assets/svg/arrowUp.svg';

type Props = {
    title: string;
    data: any[];
};

function AccordionList({ title, data }: Props) {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={styles.accordion}>
            <div className={styles.accordion__initial} onClick={() => setOpen((prev: boolean) => !prev)}>
                <p className={styles.accordion__title}>{title}</p>
                {open ? (
                    <img src={arrowUp} alt="" className={styles.accordion__arrow} />
                ) : (
                    <img src={arrowDown} alt="" className={styles.accordion__arrow} />
                )}
            </div>
            {open ? (
                <ul className={styles.accordion__list}>
                    {data?.map((item: any) => (
                        <li className={styles.accordion__item}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}

export default AccordionList;