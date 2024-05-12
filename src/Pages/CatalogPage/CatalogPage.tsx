import CatalogSortPanel from 'src/Components/Catalog/CatalogSortPanel/CatalogSortPanel';
import styles from './catalogPage.module.scss';
import { CATALOG_DATA } from 'src/constants';
import CatalogCard from 'src/Components/Cards/CatalogCard/CatalogCard';
import CatalogFilter from 'src/Components/Catalog/CatalogFilter/CatalogFilter';
import { useState } from 'react';

function CatalogPage() {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={styles.catalogPage}>
            <div className={styles.catalogPage__filter_wrap}>
                {open ? (
                    <div className={styles.catalogPage__filter}>
                        <CatalogFilter setOpen={setOpen} />
                    </div>
                ) : null}
            </div>
            <div className={styles.catalogPage__container}>
                <CatalogSortPanel setOpen={setOpen} />
                <ul className={styles.catalogPage__list}>
                    {CATALOG_DATA && CATALOG_DATA?.map((catalogItem: any) => (
                        <CatalogCard 
                            id={catalogItem.id}
                            title={catalogItem.title}
                            subtitle={catalogItem.subtitle}
                            price={catalogItem.price}
                            gallery={catalogItem?.gallery}
                            moreGalleryTotal={catalogItem.moreGalleryTotal}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CatalogPage;