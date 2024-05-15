import { useMediaQuery } from 'react-responsive';
import styles from './catalogViewedSection.module.scss';
import CatalogCard from 'src/Components/Cards/CatalogCard/CatalogCard';
import { CATALOG_VIEWED_DATA } from 'src/constants';

type Props = {
    viewedItems: any;
};

function CatalogViewedSection({ viewedItems }: Props) {

    const isMobile = useMediaQuery({
        query: '(max-width: 650px)',
    });

    return (
        <section className={styles.catalogViewed}>
            <p className={styles.catalogViewed__title}>Вы смотрели</p>
            <ul className={styles.catalogViewed__list}>
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
                        {viewedItems && viewedItems?.map((card: any) => (
                            <CatalogCard
                                id={card?.id}
                                title={card.name}
                                subtitle={card.category}
                                price={card.price}
                                gallery={card.gallery}
                                moreGalleryTotal={card.moreGalleryTotal}
                            />
                        ))}
                    </>
                )}
            </ul>
        </section>
    )
}

export default CatalogViewedSection;