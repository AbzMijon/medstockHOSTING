import styles from './blogContent.module.scss';
import NewsCard from 'src/Components/Cards/NewsCard/NewsCard';
import newsExample from '@assets/img/newsExample.png';

function BlogContent() {
    return (
        <div className={styles.blogContent}>
            <div className={styles.blogContent__firstRow}>
                <NewsCard
                    id={1}
                    type='medium'
                    photo={newsExample}
                    title={'Техническое обслуживание медицинской техники и систем подачи медицинских газов'}
                    created_at={'22 декабря 2024'}
                />
                <div className={styles.blogContent__firstRow_right}>
                    <NewsCard
                        id={1}
                        type='small'
                        photo={newsExample}
                        title={'Техническое обслуживание медицинской техники и систем подачи медицинских газов'}
                        created_at={'22 декабря 2024'}
                    />
                    <NewsCard
                        id={1}
                        type='small'
                        photo={newsExample}
                        title={'Техническое обслуживание медицинской техники и систем подачи медицинских газов'}
                        created_at={'22 декабря 2024'}
                    />
                    <NewsCard
                        id={1}
                        type='mini'
                        photo={newsExample}
                        title={'Как работает медик с новой опцией'}
                        created_at={'22 декабря 2024'}
                    />
                    <NewsCard
                        id={1}
                        type='mini'
                        photo={newsExample}
                        title={'Как работает медик с новой опцией'}
                        created_at={'22 декабря 2024'}
                    />
                </div>
            </div>
            <div className={styles.blogContent__midRow}>
                <NewsCard
                    id={1}
                    type='large'
                    photo={newsExample}
                    title={'Техническое обслуживание медицинской техники и систем подачи медицинских газов'}
                    text='Любая задача по сбору данных о товарах на торговых площадках и сайтах требует наличия прайса с названиями, артикулами, ID карточек. Но не всегда прайс содержит необходимые данные, а дополнить прайс специально для мониторинга - трудоемкий процесс, т.к. ассортимент у производителей и продавцов исчисляется тысячами ...'
                    created_at={'22 декабря 2024'}
                />
            </div>
            <div className={styles.blogContent__lastRow}>
                <NewsCard
                    id={1}
                    type='default'
                    photo={newsExample}
                    title={'Техническое обслуживание медицинской техники и систем подачи медицинских газов'}
                    created_at={'22 декабря 2024'}
                />
                <NewsCard
                    id={1}
                    type='default'
                    photo={newsExample}
                    title={'Техническое обслуживание медицинской техники и систем подачи медицинских газов'}
                    created_at={'22 декабря 2024'}
                />
                <NewsCard
                    id={1}
                    type='default'
                    photo={newsExample}
                    title={'Техническое обслуживание медицинской техники и систем подачи медицинских газов'}
                    created_at={'22 декабря 2024'}
                />
            </div>
        </div>
    )
}

export default BlogContent;