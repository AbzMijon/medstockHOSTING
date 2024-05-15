import { useParams } from 'react-router-dom';
import styles from './catalogById.module.scss';
import CatalogViewedSection from 'src/Components/CatalogById/Sections/CatalogViewedSection/CatalogViewedSection';
import CatalogRecomendationsSection from 'src/Components/CatalogById/Sections/CatalogRecomendationsSection/CatalogRecomendationsSection';
import CatalogItemSection from 'src/Components/CatalogById/Sections/CatalogItemSection/CatalogItemSection';
import { useEffect } from 'react';
import { CATALOG_ITEM } from '@src/constants';
import { addObjectToArray } from '@src/helpers/viewedItems';

function CatalogById() {

    const { id } = useParams();
    const catalogItem = CATALOG_ITEM;
    const viewedItems = JSON.parse(localStorage.getItem('viewedItems'));

    useEffect(() => {
        addObjectToArray(catalogItem);
    }, []);

    return (
        <div className={styles.catalogById}>
            <div className={styles.catalogById__container}>
                <CatalogItemSection catalogItem={catalogItem} />
                {viewedItems && viewedItems?.length ? (
                    <CatalogViewedSection viewedItems={viewedItems} />
                ) : null}
                <CatalogRecomendationsSection />
            </div>
        </div>
    )
}

export default CatalogById;