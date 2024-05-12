import { CATALOG_VIEWED_DATA } from 'src/constants';
import styles from './catalogRecomendationsSection.module.scss';
import CatalogCard from 'src/Components/Cards/CatalogCard/CatalogCard';
import { useMediaQuery } from 'react-responsive';

function CatalogRecomendationsSection() {

    const isMobile = useMediaQuery({
        query: '(max-width: 650px)',
    });

    return (
        <div className={styles.catalogRecomendation}>
            <p className={styles.catalogRecomendation__title}>Вам также может понравиться</p>
            <ul className={styles.catalogRecomendation__list}>
            {isMobile ? (
                    <CatalogCard
                        id={CATALOG_VIEWED_DATA[0]?.id}
                        title={CATALOG_VIEWED_DATA[0].title}
                        subtitle={CATALOG_VIEWED_DATA[0].subtitle}
                        price={CATALOG_VIEWED_DATA[0].price}
                        gallery={CATALOG_VIEWED_DATA[0].gallery}
                        moreGalleryTotal={CATALOG_VIEWED_DATA[0].moreGalleryTotal}
                    />
                ) : (
                    <>
                        {CATALOG_VIEWED_DATA && CATALOG_VIEWED_DATA?.map((card: any) => (
                            <CatalogCard
                                id={card?.id}
                                title={card.title}
                                subtitle={card.subtitle}
                                price={card.price}
                                gallery={card.gallery}
                                moreGalleryTotal={card.moreGalleryTotal}
                            />
                        ))}
                    </>
                )}
            </ul>
        </div>
    )
}

export default CatalogRecomendationsSection;