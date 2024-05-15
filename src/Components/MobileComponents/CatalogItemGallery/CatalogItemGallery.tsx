import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './gatalogItemGallery.module.scss';
import 'swiper/css';
import './swiper.css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'

type Props = {
    gallery: any[];
};

function CatalogItemGallery({ gallery }: Props) {
    return (
        <div className={styles.catalogItemGallery}>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                slidesPerView={1}
                spaceBetween={24}
                modules={[Pagination]}
                className={styles.catalogItemGallery__swiper}
            >
                {gallery && gallery?.map((photo: any) => (
                    <SwiperSlide className={styles.catalogItemGallery__slide}>
                        <img src={photo.src} alt="" className={styles.catalogItemGallery__img} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CatalogItemGallery;