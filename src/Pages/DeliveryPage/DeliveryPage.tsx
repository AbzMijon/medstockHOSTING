import styles from './deliveryPage.module.scss';
import adressDelivery from '@assets/img/adressDelivery.png';
import belarusMap from '@assets/img/belarusMap.png';

import locationIcon from '@assets/svg/location.svg';
import phoneIcon from '@assets/svg/phoneIcon.svg';
import deliveryIcon from '@assets/svg/deliveryIcon.svg';
import baksetIcon from '@assets/svg/fileIcon.svg';
import fileIcon from '@assets/svg/basketIcon.svg';

function DeliveryPage() {
    return (
        <div className={styles.deliveryPage}>
            <div className={styles.deliveryPage__container}>
                <p className={styles.deliveryPage__title}>Адрес склада: </p>
                <img src={adressDelivery} alt="" className={styles.deliveryPage__img} />
                <p className={styles.deliveryPage__title}>Бесплатная доставка по всей Беларуси</p>
                <div className={styles.deliveryPage__content}>
                    <img src={belarusMap} alt="" className={styles.deliveryPage__map} />
                    <ul className={styles.deliveryPage__info}>
                        <li className={styles.deliveryPage__info_item}>
                            <img src={locationIcon} alt="" className={styles.deliveryPage__info_icon} />
                            <div className={styles.deliveryPage__info_item_body}>
                                <p className={styles.deliveryPage__info_title}>Адрес склада:</p>
                                <p className={styles.deliveryPage__info_subtitle}>220062, г. Минск, ул. Тимирязева, д.121/3, пом.39</p>
                            </div>
                        </li>
                        <li className={styles.deliveryPage__info_item}>
                            <img src={phoneIcon} alt="" className={styles.deliveryPage__info_icon} />
                            <div className={styles.deliveryPage__info_item_body}>
                                <p className={styles.deliveryPage__info_title}>Телефон:</p>
                                <p className={styles.deliveryPage__info_subtitle}>
                                    <a href="tel: +375(25) 923 80 32">+375(25) 923 80 32</a>
                                </p>
                            </div>
                        </li>
                        <li className={styles.deliveryPage__info_item}>
                            <img src={phoneIcon} alt="" className={styles.deliveryPage__info_icon} />
                            <div className={styles.deliveryPage__info_item_body}>
                                <p className={styles.deliveryPage__info_title}>Время работы:</p>
                                <p className={styles.deliveryPage__info_subtitle}>пн – пт <br/> 10:00 до 19:00</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <ul className={styles.deliveryPage__list}>
                    <li className={styles.deliveryPage__item}>
                        <div className={styles.deliveryPage__item_icon}>
                            <img src={locationIcon} alt="" />
                        </div>
                        <p className={styles.deliveryPage__item_title}>Самовывоз</p>
                        <p className={styles.deliveryPage__item_text}>Вы можете забрать свой товар на нашем складе</p>
                    </li>
                    <li className={styles.deliveryPage__item}>
                        <div className={styles.deliveryPage__item_icon}>
                            <img src={deliveryIcon} alt="" />
                        </div>
                        <p className={styles.deliveryPage__item_title}>Доставка</p>
                        <p className={styles.deliveryPage__item_text}>Бесплатная доставка по всей Беларуси</p>
                    </li>
                    <li className={styles.deliveryPage__item}>
                        <div className={styles.deliveryPage__item_icon}>
                            <img src={fileIcon} alt="" />
                        </div>
                        <p className={styles.deliveryPage__item_title}>Под заказ:</p>
                        <p className={styles.deliveryPage__item_text}>Срок поставки 14 рабочих дней</p>
                    </li>
                    <li className={styles.deliveryPage__item}>
                        <div className={styles.deliveryPage__item_icon}>
                            <img src={baksetIcon} alt="" />
                        </div>
                        <p className={styles.deliveryPage__item_title}>Заказ до 13:00</p>
                        <p className={styles.deliveryPage__item_text}>Товар можно забрать в день оформления</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DeliveryPage;