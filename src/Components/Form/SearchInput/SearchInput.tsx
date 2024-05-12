import styles from './searchInput.module.scss';
import searchIcon from '@assets/svg/searchIcon.svg';

function SearchInput() {
    return (
        <div className={styles.searchInput}>
            <img src={searchIcon} alt="" className={styles.searchInput__icon} />
            <input 
                type="text" 
                className={styles.searchInput__input}
                placeholder='Поиск'
                id='searchInput'
            />
        </div>
    )
}

export default SearchInput