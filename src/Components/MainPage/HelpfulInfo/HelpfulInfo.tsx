import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './HelpfulInfo.module.scss';
import leftArrowIcon from '@assets/svg/ArrowLeft.svg';
import rightArrowIcon from '@assets/svg/ArrowRight.svg';
import { useMediaQuery } from 'react-responsive';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';

import { Pagination, Navigation } from 'swiper/modules';
import { NEWS_CARDS_IN_MAIN_PAGE } from 'src/constants';
import NewsCard from 'src/Components/Cards/NewsCard/NewsCard';


function HelpfulInfo() {

    const isMobile = useMediaQuery({
        query: '(max-width: 650px)',
    });

    return (
        <section className={styles.helpfulInfo}>
            <div className={styles.helpfulInfo__container}>
                <p className={styles.helpfulInfo__title}>Полезная информация</p>
                <p className={styles.helpfulInfo__subtitle}>Самые свежие новости инноваций и научных разработок в <br/> сфере медицинских технологий</p>
            </div>
            <div className={styles.helpfulInfo__news}>
                <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    slidesPerView={isMobile ? 1 : 'auto'}
                    spaceBetween={24}
                    modules={[Pagination, Navigation]}
                    navigation={{
                        prevEl: '#swiper-button-prev',
                        nextEl: '#swiper-button-next'
                    }}
                    className={styles.helpfulInfo__swiper}
                >
                    {NEWS_CARDS_IN_MAIN_PAGE && NEWS_CARDS_IN_MAIN_PAGE?.map((card: any) => (
                        <SwiperSlide className={styles.helpfulInfo__slide}>
                            <NewsCard
                                id={1}
                                type='default'
                                photo={card?.photo}
                                title={card?.title}
                                created_at={card?.created_at}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={styles.helpfulInfo__swiper_navigation}>
                    <div className={styles.helpfulInfo__swiper_btn} id='swiper-button-prev'>
                        <img src={leftArrowIcon} alt="" />
                    </div>
                    <div className={styles.helpfulInfo__swiper_btn} id='swiper-button-next'>
                        <img src={rightArrowIcon} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HelpfulInfo;