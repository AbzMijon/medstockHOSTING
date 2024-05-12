import styles from './CatalogCard.module.scss';
import heartIcon from '@assets/svg/heartDefault.svg';
import activeHeartIcon from '@assets/svg/activeHeart.svg';
import { useState } from 'react';
import DefaultButton from 'src/Components/DefaultButton/DefaultButton';
import { useNavigate } from 'react-router-dom';

type Props = {
    id: number;
    title: string;
    subtitle: string;
    price: number;
    gallery: any[];
    moreGalleryTotal: number;
    initialFavorite?: boolean;
};

function CatalogCard({ id, title, subtitle, price, gallery, moreGalleryTotal, initialFavorite }: Props) {

    const navigate = useNavigate();
    const [favorite, setFavorite] = useState<boolean>(initialFavorite || false);

    const handleNavigate = (id: number) => {
        navigate(`/catalog/${id}`);
    }

    return (
        <li className={styles.catalogCard} key={id} onClick={() => handleNavigate(id)}>
            <img src={gallery[0]?.src} alt="" className={styles.catalogCard__img} />
            <img src={gallery[1]?.src} alt="" className={styles.catalogCard__img_hover} />
            {favorite ? (
                <img 
                    src={activeHeartIcon} 
                    alt="" 
                    className={styles.catalogCard__heart}
                    onClick={(e) => {
                        e.stopPropagation();
                        setFavorite(false);
                    }}
                />
            ) : (
                <img 
                    src={heartIcon} 
                    alt="" 
                    className={styles.catalogCard__heart}
                    onClick={(e) => {
                        e.stopPropagation();
                        setFavorite(true);
                    }}
                />
            )}
            <p className={styles.catalogCard__name}>{title}</p>
            <div className={styles.catalogCard__changeBlock}>
                <div className={styles.catalogCard__changeBlock_first}>
                    <p className={styles.catalogCard__description}>{subtitle}</p>
                    <p className={styles.catalogCard__price}>от {price} руб</p>
                </div>
                <div className={styles.catalogCard__changeBlock_second}>
                    <div className={styles.catalogCard__changeBlock_gallery}>
                        <ul className={styles.catalogCard__changeBlock_list}>
                            {gallery && gallery?.map((photo: any) => (
                                <li className={styles.catalogCard__changeBlock_img}>
                                    <img src={photo?.src} alt="" />
                                </li>
                            ))}
                        </ul>
                        <p className={styles.catalogCard__changeBlock_more}>+{moreGalleryTotal}</p>
                    </div>
                    <DefaultButton
                        text='Добавить в карзину'
                        onClick={() => null}
                        type='secondary'
                        className={styles.catalogCard__changeBlock_btn}
                    />
                </div>
            </div>
        </li>
    )
}

export default CatalogCard;