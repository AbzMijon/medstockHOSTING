import { CATALOG_ITEM } from 'src/constants';
import styles from './catalogItemSection.module.scss';
import { useState } from 'react';
import heartIcon from '@assets/svg/heartDefault.svg';
import heartActiveIcon from '@assets/svg/activeHeart.svg';
import DefaultButton from 'src/Components/DefaultButton/DefaultButton';
import searchIcon from '@assets/svg/search.svg';
import AccordionList from 'src/Components/AccordionList/AccordionList';
import AccordionComments from 'src/Components/AccordionComments/AccordionComments';
import { useAppDispatch } from 'src/redux/store';
import { setItemOptions, setModalByName } from 'src/redux/reducers/modalReducer/modalReducer';
import { useMediaQuery } from 'react-responsive';
import CatalogItemGallery from '@src/Components/MobileComponents/CatalogItemGallery/CatalogItemGallery';

function CatalogItemSection() {

    const dispatch = useAppDispatch();
    const [favorite, setFavorite] = useState<boolean>(false);
    const catalogItem = CATALOG_ITEM;

    const isLaptop = useMediaQuery({
        query: '(max-width: 1140px)',
    });

    const handleOpenOptions = (options: any[]) => {
        dispatch(setModalByName({ isModalActive: true, modalName: 'modal-items-options', withDarkOverlay: true }));
        dispatch(setItemOptions({ options }));
    }

    return (
        <section className={styles.catalogItem}>
            <div className={styles.catalogItem__gallery}>
                {isLaptop ? (
                    <CatalogItemGallery gallery={catalogItem?.gallery} />
                ) : (
                    <>
                        {catalogItem.gallery && catalogItem?.gallery?.map((photo: any) => (
                            <div className={styles.catalogItem__img_wrap} id={photo.key}>
                                <img src={photo.img} alt="" className={styles.catalogItem__img} />
                            </div>
                        ))}
                    </>
                )
                }
                {favorite ? (
                    <img src={heartActiveIcon} alt="" className={styles.catalogItem__heart} onClick={() => setFavorite(false)} />
                ) : (
                    <img src={heartIcon} alt="" className={styles.catalogItem__heart} onClick={() => setFavorite(true)} />
                )}
            </div>
            <div className={styles.catalogItem__content}>
                <p className={styles.catalogItem__name}>{catalogItem.name}</p>
                <p className={styles.catalogItem__category}>{catalogItem.category}</p>
                <div className={styles.catalogItem__list}>
                    <div className={styles.catalogItem__list_item}>
                        <p>Артикул</p>
                        <p>{catalogItem.articul}</p>
                    </div>
                    <div className={styles.catalogItem__list_item}>
                        <p>Размер</p>
                        <p>{catalogItem.size}</p>
                    </div>
                    <div className={styles.catalogItem__list_item}>
                        <p>Привод</p>
                        <p>{catalogItem.unit}</p>
                    </div>
                </div>
                <div className={styles.catalogItem__options_titles}>
                    <p className={styles.catalogItem__option_title}>Дполнительные опции:</p>
                    <p className={styles.catalogItem__option_details} onClick={() => handleOpenOptions(catalogItem?.options)}>Подробнее</p>
                </div>
                <ul className={styles.catalogItem__options}>
                    {catalogItem && catalogItem?.options?.length ? catalogItem.options.slice(0, 3).map((option: any) => (
                        <li className={styles.catalogItem__options_item}>
                            <div className={styles.catalogItem__item_input}>
                                <input 
                                    type="checkbox" 
                                    className={styles.catalogItem__checkbox} 
                                    id={option.id}
                                />
                                <label 
                                    htmlFor={option.id}
                                    className={styles.catalogItem__checkbox_text}
                                >
                                    <img src={option.src} alt="" className={styles.catalogItem__option_img} />
                                    <p className={styles.catalogItem__option_name}>{option.title}</p>
                                </label>
                            </div>
                        </li>
                    )) : null}
                </ul>
                <p className={styles.catalogItem__price}>{catalogItem?.price}</p>
                <DefaultButton
                    type='primary'
                    text='Добавить в корзину'
                    onClick={() => null}
                    icon={searchIcon}
                    className={styles.catalogItem__btn}
                />
                <div>
                    <AccordionList
                        title='Характеристики'
                        data={catalogItem?.characteristics}
                    />
                    <AccordionList
                        title='Доставка'
                        data={catalogItem?.characteristics}
                    />
                    <AccordionComments
                        data={catalogItem?.reviews}
                        rating={4}
                        totalReviews={catalogItem?.totalReviews}
                        name={catalogItem?.name}
                    />
                </div>
            </div>
        </section>
    )
}

export default CatalogItemSection;