import DefaultButton from 'src/Components/DefaultButton/DefaultButton';
import styles from './welcomeSection.module.scss';
import searchIcon from '@assets/svg/search.svg';
import coopIcon1 from '@assets/svg/coop1.svg';
import coopIcon2 from '@assets/svg/coop2.svg';
import coopIcon3 from '@assets/svg/coop3.svg';
import coopIcon4 from '@assets/svg/coop4.svg';

import goodsImg1 from '@assets/img/goodsImg1.png';
import goodsImg2 from '@assets/img/goodsImg2.png';
import goodsImg3 from '@assets/img/goodsImg3.png';
import SwitchBlock from './SwitchBlock/SwitchBlock';
import GoodsBlock from './GoodsBlock/GoodsBlock';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/Routes/routes';

function WelcomeSection() {

    const navigate = useNavigate();

    return (
        <section className={styles.welcome}>
            <div className={styles.welcome__container}>
                <div className={styles.welcome__titleBlock}>
                    <h1 className={styles.welcome__title}>Инновационные решения <br/> для ухода за пациентами</h1>
                    <p className={styles.welcome__subtitle}>Наша цель -  создать максимальный комфорт пациентам во время лечения.</p>
                    <DefaultButton 
                        text='Каталог' 
                        type='primary' 
                        onClick={() => navigate(ROUTES.catalog)}
                        icon={searchIcon}
                        className={styles.welcome__btn}
                    />
                </div>
                <div className={styles.welcome__contentUp}>
                    <div className={styles.welcome__catalog}>
                        <SwitchBlock />
                    </div>
                    <ul className={styles.welcome__cooperation}>
                        <li className={styles.welcome__cooperation_card}>
                            <img src={coopIcon1} alt="" className={styles.welcome__cooperation_card_img} />
                        </li>
                        <li className={styles.welcome__cooperation_card}>
                            <img src={coopIcon2} alt="" className={styles.welcome__cooperation_card_img} />
                        </li>
                        <li className={styles.welcome__cooperation_card}>
                            <img src={coopIcon3} alt="" className={styles.welcome__cooperation_card_img} />
                        </li>
                        <li className={styles.welcome__cooperation_card}>
                            <img src={coopIcon4} alt="" className={styles.welcome__cooperation_card_img} />
                        </li>
                    </ul>
                </div>
                <div className={styles.welcome__contentDown}>
                    <div className={styles.welcome__goods}>
                        <GoodsBlock />
                    </div>
                    <img src={goodsImg1} alt="" className={styles.welcome__goods_img} />
                    <img src={goodsImg3} alt="" className={styles.welcome__goods_img} />
                    <div className={styles.welcome__goods_statistics}>
                        <div className={styles.welcome__goods_statistics_itemCount}>
                            <p className={styles.welcome__goods_statistics_title}>1523</p>
                            <p className={styles.welcome__goods_statistics_text}>товара</p>
                        </div>
                        <div className={styles.welcome__goods_statistics_category_and_companies}>
                            <div className={styles.welcome__goods_statistics_category}>
                                <p className={styles.welcome__goods_statistics_title}>12</p>
                                <p className={styles.welcome__goods_statistics_text}>категорий</p>
                            </div>
                            <div className={styles.welcome__goods_statistics_company}>
                                <p className={styles.welcome__goods_statistics_title}>3</p>
                                <p className={styles.welcome__goods_statistics_text}>компании</p>
                            </div>
                        </div>
                    </div>
                    <img src={goodsImg2} alt="" className={styles.welcome__goods_img} />
                </div>
            </div>
        </section>
    )
}

export default WelcomeSection;