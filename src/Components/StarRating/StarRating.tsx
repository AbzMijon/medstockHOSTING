import { CSSProperties } from 'react';
import styles from './starRating.module.scss';
import star from '@assets/svg/starBlue.svg';
import emptyStar from '@assets/svg/starGrey.svg';

type Props = {
    filledStars: number;
    style?: CSSProperties;
};


function StarRating({ filledStars, style }: Props) {
    return (
        <div className={styles.rating}>
            {Array.from(Array(5), (_, index) => (
                <img
                    className={styles.rating__star}
                    src={index + 1 <= filledStars ? star : emptyStar}
                    alt={index + 1 <= filledStars ? 'filled star' : 'empty star'}
                    key={index}
                    style={{ ...style }}
                />
            ))}
        </div>
    )
}

export default StarRating;