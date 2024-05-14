import { useState } from 'react';
import styles from './authBlock.module.scss';
import avatarIcon from '@assets/svg/avatar.svg';
import defaultAvatar from '@assets/img/defaultAvatar.png';
import { useSelector } from 'react-redux';
import { authMenuSelector } from '@src/redux/reducers/headerReducer/headerSelector';
import logoutIcon from '@assets/svg/logout.svg';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@src/redux/store';
import { logoutThunk } from '@src/api/authApi/authThunks';

function AuthBlock() {

    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const authMenu = useSelector(authMenuSelector);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleRedirect = (link: string) => {
        navigate(link);
        setOpenMenu(false);
    }

    const logout = () => {
        dispatch(logoutThunk());
    };

    return (
        <div className={styles.authBlock}>
            <img 
                src={avatarIcon}
                alt=""
                className={styles.authBlock__avatar}
                onClick={() => setOpenMenu((prev: boolean) => !prev)}
            />
            {openMenu && (
                <div className={styles.authBlock__menu}>
                    <div className={styles.authBlock__head}>
                        <img src={defaultAvatar} alt="" className={styles.authBlock__head_avatar} />
                        <p className={styles.authBlock__name}>Sviatlana Skobeleva</p>
                    </div>
                    <ul className={styles.authBlock__list}>
                        {authMenu && authMenu?.map((menuItem: any) => (
                            <li className={styles.authBlock__list_item} onClick={() => handleRedirect(menuItem.redirectLink)}>
                                <img src={menuItem.icon} alt="" />
                                <p className={styles.authBlock__list_item_name}>{menuItem.title}</p>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.authBlock__logout} onClick={logout}>
                        <img src={logoutIcon} alt="" />
                        <p className={styles.authBlock__logout_name}>Выход</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AuthBlock;