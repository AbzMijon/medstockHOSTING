import { useParams } from 'react-router-dom';
import styles from './catalogById.module.scss';
import CatalogViewedSection from 'src/Components/CatalogById/Sections/CatalogViewedSection/CatalogViewedSection';
import CatalogRecomendationsSection from 'src/Components/CatalogById/Sections/CatalogRecomendationsSection/CatalogRecomendationsSection';
import CatalogItemSection from 'src/Components/CatalogById/Sections/CatalogItemSection/CatalogItemSection';

function CatalogById() {

    const { id } = useParams();

    return (
        <div className={styles.catalogById}>
            <div className={styles.catalogById__container}>
                <CatalogItemSection />
                <CatalogViewedSection />
                <CatalogRecomendationsSection />
            </div>
        </div>
    )
}

export default CatalogById;