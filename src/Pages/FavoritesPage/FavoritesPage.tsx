import { useState } from 'react';
import styles from './favoritesPage.module.scss';
import CatalogFilter from 'src/Components/Catalog/CatalogFilter/CatalogFilter';
import CatalogSortPanel from 'src/Components/Catalog/CatalogSortPanel/CatalogSortPanel';
import { CATALOG_DATA } from 'src/constants';
import CatalogCard from 'src/Components/Cards/CatalogCard/CatalogCard';
import NoDataBlock from 'src/Components/NoDataBlock/NoDataBlock';

function FavoritesPage() {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={styles.favoritesPage}>
            <div className={styles.favoritesPage__filter_wrap}>
                {open ? (
                    <div className={styles.favoritesPage__filter}>
                        <CatalogFilter setOpen={setOpen} />
                    </div>
                ) : null}
            </div>
            <div className={styles.favoritesPage__container}>
                <CatalogSortPanel setOpen={setOpen} />
                {CATALOG_DATA && CATALOG_DATA.length ? (
                    <ul className={styles.favoritesPage__list}>
                        {CATALOG_DATA?.map((favoritesItem: any) => (
                            <CatalogCard
                                id={favoritesItem.id}
                                title={favoritesItem.title}
                                subtitle={favoritesItem.subtitle}
                                price={favoritesItem.price}
                                gallery={favoritesItem?.gallery}
                                moreGalleryTotal={favoritesItem.moreGalleryTotal}
                                initialFavorite={true}
                            />
                        ))}
                    </ul>
                ) : (
                    <div className={styles.favoritesPage__noData}>
                        <NoDataBlock title='У вас пока нет избранного' text='Сохраняйте товары, которые вы находите на Medstok и делитесь ими с близкими людьми.' />
                    </div>
                )}
            </div>
        </div>
    )
}

export default FavoritesPage;