import BlogContent from '@src/Components/BlogContent/BlogContent';
import styles from './BlogPage.module.scss';
import { useMediaQuery } from 'react-responsive';
import BlogContentMobile from '@src/Components/MobileComponents/BlogContentMobile/BlogContentMobile';

function BlogPage() {

    const isPlanshet = useMediaQuery({
        query: '(max-width: 1040px)',
    });

    return (
        <div className={styles.blogPage}>
            <div className={styles.blogPage__container}>
                {isPlanshet ? (
                    <BlogContentMobile />
                ) : (
                    <BlogContent />
                )}
            </div>
        </div>
    )
}

export default BlogPage;