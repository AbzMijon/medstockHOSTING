import { useState } from 'react';
import styles from './bigAccordion.module.scss';
import arrowUp from '@assets/svg/arrowUp.svg';
import arrowDown from '@assets/svg/arrowDown.svg';

type Props = {
    id: number;
    title: string;
    data: any[];
};

function BigAccordion({ id, title, data }: Props) {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={styles.accordionBig} key={id}>
            <div className={styles.accordionBig__initial} onClick={() => setOpen((prev: boolean) => !prev)}>
                <p className={styles.accordionBig__title}>{title}</p>
                {open ? (
                    <img src={arrowUp} alt="" className={styles.accordionBig__arrow} />
                ) : (
                    <img src={arrowDown} alt="" className={styles.accordionBig__arrow} />
                )}
            </div>
            {open ? (
                <ul className={styles.accordionBig__list}>
                    {data?.map((item: any) => (
                        <li className={styles.accordionBig__item}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}

export default BigAccordion;