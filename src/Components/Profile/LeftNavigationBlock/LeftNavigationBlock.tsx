import styles from './leftNavigationBlock.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import logoutIcon from '@assets/svg/logout.svg';
import defaultAvatar from '@assets/img/defaultAvatar.png';

type Props = {
    menuData: any[];
};

function LeftNavigationBlock({ menuData }: Props) {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleRedirect = (link: string) => {
        navigate(link);
    }

    return (
        <div className={styles.leftNavigationBlock}>
            <div className={styles.leftNavigationBlock__head}>
                <img src={defaultAvatar} alt="" className={styles.leftNavigationBlock__head_avatar} />
                <p className={styles.leftNavigationBlock__name}>Sviatlana Skobeleva</p>
            </div>
            <ul className={styles.leftNavigationBlock__list}>
                {menuData && menuData?.map((menuItem: any) => (
                    <li 
                        className={pathname === menuItem.redirectLink ? styles.leftNavigationBlock__list_item_active : styles.leftNavigationBlock__list_item} 
                        onClick={() => handleRedirect(menuItem.redirectLink)}>
                        <img src={menuItem.icon} alt="" />
                        <p className={styles.leftNavigationBlock__list_item_name}>{menuItem.title}</p>
                    </li>
                ))}
            </ul>
            <div className={styles.leftNavigationBlock__logout}>
                <img src={logoutIcon} alt="" />
                <p className={styles.leftNavigationBlock__logout_name}>Выход</p>
            </div>
        </div>
    )
}

export default LeftNavigationBlock;