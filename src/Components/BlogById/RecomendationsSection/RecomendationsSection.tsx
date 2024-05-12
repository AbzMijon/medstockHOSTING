import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './recomendationsSection.module.scss';
import { NEWS_CARDS_IN_MAIN_PAGE } from 'src/constants';
import NewsCard from 'src/Components/Cards/NewsCard/NewsCard';
import { useMediaQuery } from 'react-responsive';

function RecomendationsSection() {

    const isMobile = useMediaQuery({
        query: '(max-width: 650px)',
    });

    return (
        <div className={styles.recommendationBlogs}>
            <p className={styles.recommendationBlogs__title}>Вам также может понравиться</p>
            <Swiper
                    slidesPerView={isMobile ? 1 : 'auto'}
                    spaceBetween={24}
                    className={styles.recommendationBlogs__swiper}
                >
                    {NEWS_CARDS_IN_MAIN_PAGE && NEWS_CARDS_IN_MAIN_PAGE?.map((card: any) => (
                        <SwiperSlide className={styles.recommendationBlogs__slide}>
                            <NewsCard
                                id={2}
                                type='default'
                                photo={card?.photo}
                                title={card?.title}
                                created_at={card?.created_at}
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    )
}

export default RecomendationsSection