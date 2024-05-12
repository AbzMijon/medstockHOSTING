import styles from './pageNavigator.module.scss';

function PageNavigator() {
    return (
        <div className={styles.pageNavigator}>
            <p className={styles.pageNavigator__prevPath}>Главная</p>
            <p className={styles.pageNavigator__arrow}>></p>
            <p className={styles.pageNavigator__currentPath}>Блог</p>
        </div>
    )
}

export default PageNavigator;