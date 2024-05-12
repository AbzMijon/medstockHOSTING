import StarRating from 'src/Components/StarRating/StarRating';
import styles from './reviewCard.module.scss';
import threeDots from '@assets/svg/threeDots.svg';

type Props = {
    name: string;
    date: string;
    rating: number;
    item: string;
    text: string;
    answer: { name: string, text: string }
};

function ReviewCard({ name, date, rating, item, text, answer }: Props) {
    return (
        <div className={styles.reviewCard}>
            <div className={styles.reviewCard__nameAndSettings}>
                <p className={styles.reviewCard__name}>{name}</p>
                <div className={styles.reviewCard__settings_icon}>
                    <img src={threeDots} alt="" />
                </div>
            </div>
            <p className={styles.reviewCard__date}>{date}</p>
            <StarRating filledStars={rating} style={{ marginBottom: '21px' }}/>
            <p className={styles.reviewCard__item}>{item}</p>
            <p className={styles.reviewCard__text}>{text}</p>
            {answer ? (
                <div className={styles.reviewCard__answer}>
                    <p className={styles.reviewCard__answer_author}>{answer?.name}</p>
                    <div className={styles.reviewCard__answer_textWrap}>
                        <div className={styles.reviewCard__answer_line}></div>
                        <p className={styles.reviewCard__answer_text}>{answer?.text}</p>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default ReviewCard