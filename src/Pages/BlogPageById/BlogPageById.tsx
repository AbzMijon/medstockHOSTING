import { useParams } from 'react-router-dom';
import styles from './BlogPageById.module.scss';
import ArticullSection from 'src/Components/BlogById/ArticullSection/ArticullSection';
import RecomendationsSection from 'src/Components/BlogById/RecomendationsSection/RecomendationsSection';
import PageNavigator from 'src/Components/PageNavigator/PageNavigator';

function BlockPageById() {

    const { id } = useParams();

    return (
        <div className={styles.blockPageById}>
            <div className={styles.blockPageById__container}>
                <PageNavigator />
            </div>
            <ArticullSection />
            <RecomendationsSection />
        </div>
    )
}

export default BlockPageById;