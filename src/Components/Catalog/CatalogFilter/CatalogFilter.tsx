import { useState } from 'react';
import styles from './CatalogFilter.module.scss';
import crossIcon from '@assets/svg/cross.svg';
import searchIcon from '@assets/svg/search.svg';
import CheckboxSelector from 'src/Components/Filters/CheckboxSelector/CheckboxSelector';
import { CATALOG_FILTER_DATA } from 'src/constants';
import Range from 'src/Components/Filters/Range/Range';

type Props = {
    setOpen: any;
}

function CatalogFilter({ setOpen }: Props) {

    const [search, setSearch] = useState<string>('');

    return (
        <div className={styles.catalogFilter}>
            <div className={styles.catalogFilter__header}>
                <img src={crossIcon} alt="" className={styles.catalogFilter__close} onClick={() => setOpen(false)} />
                <div className={styles.catalogFilter__title_and_clear}>
                    <p className={styles.catalogFilter__title}>Фильтры</p>
                    <p className={styles.catalogFilter__clear}>Очистить</p>
                </div>
                <div className={styles.catalogFilter__input_wrap}>
                    <img src={searchIcon} alt="" className={styles.catalogFilter__input_search} />
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Поиск' />
                    {search && <img src={crossIcon} alt="" className={styles.catalogFilter__input_clear} /> }
                </div>
            </div>
            <div className={styles.catalogFilter__list}>
                <div className={styles.catalogFilter__item}>
                    <CheckboxSelector 
                        title='Категория'
                        data={CATALOG_FILTER_DATA}
                    />
                </div>
                <div className={styles.catalogFilter__item}>
                    <CheckboxSelector 
                        title='Применение'
                        data={CATALOG_FILTER_DATA}
                    />
                </div>
                <div className={styles.catalogFilter__item}>
                    <CheckboxSelector 
                        title='Приводы'
                        data={CATALOG_FILTER_DATA}
                    />
                </div>
                <div className={styles.catalogFilter__item}>
                    <CheckboxSelector 
                        title='Пациенты'
                        data={CATALOG_FILTER_DATA}
                    />
                </div>
                <div className={styles.catalogFilter__item}>
                    <CheckboxSelector 
                        title='Функции'
                        data={CATALOG_FILTER_DATA}
                    />
                </div>
                <div className={styles.catalogFilter__item}>
                    <CheckboxSelector 
                        title='Комплектующие'
                        data={CATALOG_FILTER_DATA}
                    />
                </div>
                <div className={styles.catalogFilter__item}>
                    <CheckboxSelector 
                        title='Варианты'
                        data={CATALOG_FILTER_DATA}
                    />
                </div>
                <div className={styles.catalogFilter__item}>
                    <CheckboxSelector 
                        title='Число секций'
                        data={CATALOG_FILTER_DATA}
                    />
                </div>
                <div className={styles.catalogFilter__item}>
                    <Range
                        title={'Высота'}
                        maxValue={300}
                    />
                </div>
                <div className={styles.catalogFilter__item}>
                    <Range
                        title={'Ширина'}
                        maxValue={300}
                    />
                </div>
                <div className={styles.catalogFilter__item}>
                    <Range
                        title={'Высота'}
                        maxValue={200}
                    />
                </div>
                <div className={styles.catalogFilter__item}>
                    <Range
                        title={'Длина'}
                        maxValue={500}
                    />
                </div>
                <div className={styles.catalogFilter__item}>
                    <Range
                        title={'Цена'}
                        maxValue={4000}
                    />
                </div>
            </div>
        </div>
    )
}

export default CatalogFilter;