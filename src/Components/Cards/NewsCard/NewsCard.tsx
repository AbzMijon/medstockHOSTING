import { useNavigate } from 'react-router-dom';
import styles from './newsCard.module.scss';
import shareIcon from '@assets/svg/share.svg';

type Props = {
    id: number;
    type: 'mini' | 'small' | 'default' | 'medium' | 'large'
    photo: string;
    title: string;
    created_at: string;
    text?: string;
}


function NewsCard({ id, type, photo, title, created_at, text }: Props) {

    const className = `
        ${type === 'mini' ? styles.newsMiniCard : ''}
        ${type === 'small' ? styles.newsSmallCard : ''}
        ${type === 'default' ? styles.newsDefaultCard : ''}
        ${type === 'medium' ? styles.newsMediumCard : ''}
        ${type === 'large' ? styles.newsLargeCard : ''}
    `;

    const navigate = useNavigate();

    return (
        <div className={className} onClick={() => navigate(`/blog/${id}`)}>
            <div className={styles.imgContainer}>
                <img src={photo} alt="" className={styles.img} />
            </div>
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                {text && type === 'large' ? <p className={styles.text}>{text}</p> : null}
                <div className={styles.tools}>
                    <p className={styles.createdAt}>{created_at}</p>
                    <div className={styles.share}>
                        <img src={shareIcon} alt="" className={styles.share_img} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard;