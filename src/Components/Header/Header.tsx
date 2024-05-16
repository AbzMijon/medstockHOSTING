import { Link, useNavigate } from 'react-router-dom';
import styles from './header.module.scss';
import SearchInput from '../Form/SearchInput/SearchInput';
import DefaultButton from '../DefaultButton/DefaultButton';
import logo from '@assets/svg/logoMedstock.svg';
import heartIcon from '@assets/svg/HeartOutlined.svg';
import basketIcon from '@assets/svg/ShoppingCartOutlined.svg';
import { ROUTES } from 'src/Routes/routes';
import { useSelector } from 'react-redux';
import { isAuthSelector } from '@src/redux/reducers/authReducer/authSelector';
import AuthBlock from './AuthBlock/AuthBlock';
import { setModalByName } from '@src/redux/reducers/modalReducer/modalReducer';
import { useAppDispatch } from '@src/redux/store';

function Header() {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isAuth = useSelector(isAuthSelector);

    const navigateToHome = () => {
        navigate(ROUTES.home);
    }

    const handleRegistrationButton = () => {
        dispatch(setModalByName({ isModalActive: true, modalName: 'modal-registration', withDarkOverlay: true }));
    };

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__desktop}>
                    <div className={styles.header__leftBlock}>
                        <img src={logo} alt="logo" className={styles.header__logo} onClick={navigateToHome} />
                        <div className={styles.header__search}>
                            <SearchInput  />
                        </div>
                    </div>
                    <div className={styles.header__rightBlock}>
                        <nav className={styles.header__nav}>
                            <ul className={styles.header__list}>
                                <li className={styles.header__list_item}>
                                    <Link to={ROUTES.catalog} className={styles.header__list_link}>Каталог</Link>
                                </li>
                                <li className={styles.header__list_item}>
                                    <Link to={ROUTES.payment} className={styles.header__list_link}>Оплата</Link>
                                </li>
                                <li className={styles.header__list_item}>
                                    <Link to={ROUTES.delivery} className={styles.header__list_link}>Доставка</Link>
                                </li>
                                <li className={styles.header__list_item}>
                                    <Link to={ROUTES.blog} className={styles.header__list_link}>Блог</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className={styles.header__tools}>
                            {isAuth ? (
                                <AuthBlock />
                            ) : (
                                <DefaultButton 
                                    text='Вход' 
                                    onClick={handleRegistrationButton} 
                                    type='tertiary'
                                />
                            )}
                            <div className={styles.header__tools_item} onClick={() => navigate(ROUTES.favorites)}>
                                <img src={heartIcon} alt="" />
                            </div>
                            <div className={styles.header__tools_item} onClick={() => navigate(ROUTES.basket)}>
                                <img src={basketIcon} alt="" />
                                <div className={styles.header__tools_item_notifications}>22</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.header__mobile_search}>
                    <SearchInput />
                </div>
            </div>
        </header>
    )
}

export default Header;