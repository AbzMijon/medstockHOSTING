import Selector from 'src/Components/Filters/Selector/Selector';
import styles from './CatalogSortPanel.module.scss';
import filtersIcon from '@assets/svg/Filters.svg';
import { useState } from 'react';

type Props = {
    setOpen: any;
}

function CatalogSortPanel({ setOpen }: Props) {

    const [sort, setSort] = useState<any>(null);
    const [category, setCategory] = useState<any>(null);

    return (
        <div className={styles.catalogSortPanel}>
            <button className={styles.catalogSortPanel__btn_filter} onClick={() => setOpen((prev: boolean) => !prev)}>
                <img src={filtersIcon} alt="" className={styles.catalogSortPanel__btn_icon} />
                <p className={styles.catalogSortPanel__btn_title}>Фильтры</p>
            </button>
            <Selector
                activeItem={category}
                setActiveItem={setCategory}
                data={[ 
                    { id: 0, title: 'Тест 1' }, 
                    { id: 1, title: 'Тест 2' }, 
                    { id: 2, title: 'Тест 3' }, 
                    { id: 3, title: 'Тест 4' }, 
                ]}
                type={'default'}
                name={'Категории'}
                className={styles.catalogSortPanel__new}
            />
            <button className={styles.catalogSortPanel__btn}>
                <p className={styles.catalogSortPanel__btn_title}>Кровати для пациентов</p>
            </button>
            <button className={styles.catalogSortPanel__btn}>
                <p className={styles.catalogSortPanel__btn_title}>Кровати для интенсивной терапии</p>
            </button>
            <button className={styles.catalogSortPanel__btn}>
                <p className={styles.catalogSortPanel__btn_title}>Кровати для новорождённых</p>
            </button>
            <Selector
                activeItem={sort}
                setActiveItem={setSort}
                data={[ 
                    { id: 0, title: 'Новинки' }, 
                    { id: 1, title: 'Сперва дорогие' }, 
                    { id: 2, title: 'Сперва дешевые' }, 
                    { id: 3, title: 'По рейтингу' }, 
                ]}
                name={'Сортировка'}
                type={'transparent'}
                className={styles.catalogSortPanel__sort}
            />
        </div>
    )
}

export default CatalogSortPanel;