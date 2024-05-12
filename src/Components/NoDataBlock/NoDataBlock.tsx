import styles from './noDataBlock.module.scss';
import noDataImg from '@assets/img/noData.png';

type Props = {
    title: string;
    text: string;
    className?: any;
};

function NoDataBlock({ title, text, className }: Props) {
    return (
        <div className={`${styles.noDataBlock} ${className ? className : ''}`}>
            <img src={noDataImg} alt="" className={styles.noDataBlock__img} />
            {title ? <p className={styles.noDataBlock__title}>{title}</p> : null}
            <p className={styles.noDataBlock__text}>{text}</p>
        </div>
    )
}

export default NoDataBlock;