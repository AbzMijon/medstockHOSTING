import DefaultButton from 'src/Components/DefaultButton/DefaultButton';
import styles from './Advantages.module.scss';
import bedImg from '@assets/img/bed.png';
import searchIcon from '@assets/svg/search.svg';
import advantagesIcon1 from '@assets/svg/advantagesIcon1.svg';
import advantagesIcon2 from '@assets/svg/advantagesIcon2.svg';
import advantagesIcon3 from '@assets/svg/advantagesIcon3.svg';
import advantagesIcon4 from '@assets/svg/advantagesIcon4.svg';
import advantagesForPartnersImg from '@assets/img/advantagesForPartners.png';
import { ROUTES } from '@src/Routes/routes';
import { useNavigate } from 'react-router-dom';

function Advantages() {

    const navigate = useNavigate();

    return (
        <section className={styles.advantages}>
            <div className={styles.advantages__container}>
                <div className={styles.advantages__bed}>
                    <img src={advantagesForPartnersImg} alt="" className={styles.advantages__bed_lines} />
                    <img src={bedImg} alt="" className={styles.advantages__bed_img} />
                </div>
                <div className={styles.advantages__illustration}>
                    <ul className={styles.advantages__list}>
                        <li className={styles.advantages__card}>
                            <img src={advantagesIcon1} alt="" className={styles.advantages__card_icon} />
                            <p className={styles.advantages__card_title}>Модификация модели по запросу</p>
                        </li>
                        <li className={styles.advantages__card}>
                            <img src={advantagesIcon2} alt="" className={styles.advantages__card_icon} />
                            <p className={styles.advantages__card_title}>Инновационные разработки</p>
                        </li>
                        <li className={styles.advantages__card}>
                            <img src={advantagesIcon3} alt="" className={styles.advantages__card_icon} />
                            <p className={styles.advantages__card_title}>Гарантийное обслуживание</p>
                        </li>
                        <li className={styles.advantages__card}>
                            <img src={advantagesIcon4} alt="" className={styles.advantages__card_icon} />
                            <p className={styles.advantages__card_title}>Соблюдение сроков поставки</p>
                        </li>
                    </ul>
                    <DefaultButton 
                        text='Зарегистрироваться'
                        icon={searchIcon}
                        onClick={() => navigate(ROUTES.registration)}
                        type='primary'
                        className={styles.advantages__btn}
                    />
                </div>
            </div>
        </section>
    )
}

export default Advantages;