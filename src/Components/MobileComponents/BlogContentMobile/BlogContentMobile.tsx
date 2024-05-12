import styles from './blogContentMobile.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { NEWS_CARDS_IN_MAIN_PAGE } from '@src/constants';
import NewsCard from '@src/Components/Cards/NewsCard/NewsCard';

function BlogContentMobile() {
    return (
        <div className={styles.blogContentMobile}>
            <div className={styles.blogContentMobile__initial}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    className={styles.blogContentMobile__swiper}
                >
                    {NEWS_CARDS_IN_MAIN_PAGE && NEWS_CARDS_IN_MAIN_PAGE?.map((card: any) => (
                        <SwiperSlide className={styles.helpfulInfo__slide}>
                            <NewsCard
                                id={card?.id}
                                type='default'
                                photo={card?.photo}
                                title={card?.title}
                                created_at={card?.created_at}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles.blogContentMobile__mid}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    className={styles.blogContentMobile__swiper}
                >
                    {NEWS_CARDS_IN_MAIN_PAGE && NEWS_CARDS_IN_MAIN_PAGE?.map((card: any) => (
                        <SwiperSlide className={styles.helpfulInfo__slide}>
                            <NewsCard
                                id={card?.id}
                                type='default'
                                photo={card?.photo}
                                title={card?.title}
                                created_at={card?.created_at}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles.blogContentMobile__final}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    className={styles.blogContentMobile__swiper}
                >
                    {NEWS_CARDS_IN_MAIN_PAGE && NEWS_CARDS_IN_MAIN_PAGE?.map((card: any) => (
                        <SwiperSlide className={styles.helpfulInfo__slide}>
                            <NewsCard
                                id={card?.id}
                                type='default'
                                photo={card?.photo}
                                title={card?.title}
                                created_at={card?.created_at}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default BlogContentMobile;