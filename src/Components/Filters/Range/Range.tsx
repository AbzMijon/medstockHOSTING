import { useState } from 'react';
import styles from './Range.module.scss';
import arrowDown from '@assets/svg/miniArrowDown.svg';
import arrowUp from '@assets/svg/miniArrowUp.svg';

type Props = {
    maxValue: number;
    title: string;
}

function Range({ maxValue, title }: Props) {

    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<number>(0);

    return (
        <div className={styles.range}>
            <div className={styles.range__input} onClick={() => setOpen((prev: boolean) => !prev)}>
                <p className={styles.range__title}>{title}</p>
                {open ? (
                    <img src={arrowUp} alt="" className={styles.range__arrow} />
                ) : (
                    <img src={arrowDown} alt="" className={styles.range__arrow} />
                )}
            </div>
            {open ? (
                <div className={styles.range__body}>
                    <div className={styles.range__values}>
                        <input type="text" className={styles.range__body_input} value={'150см'} />
                        <input type="text" className={styles.range__body_input} value={'260см'} />
                    </div>
                    <input
                        value={value}
                        min={1}
                        max={maxValue}
                        step={0.1}
                        type="range"
                        className={styles.range__slider}
                        onChange={(e) => setValue(+e.target.value)}
                    />
                </div>
            ) : null}
        </div>
    )
}

export default Range;