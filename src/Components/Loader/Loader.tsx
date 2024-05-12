import { FC } from 'react';
import styles from './loader.module.scss';
import loader from '@assets/img/loader.webp';

type Props = {
    className?: string;
}

export const Loader: FC<Props> = ({ className }): JSX.Element => {
    return (
        <img className={`${styles.loader} ${className}`} src={loader} alt='loader' />
    )
};