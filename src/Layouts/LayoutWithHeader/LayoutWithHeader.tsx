import { Outlet } from 'react-router-dom';
import Header from 'src/Components/Header/Header';
import styles from './LayoutWithHeader.module.scss';
import Footer from 'src/Components/Footer/Footer';
import ModalContainer from 'src/Components/ModalContainer/ModalContainer';
import { useMediaQuery } from 'react-responsive';
import FooterMobile from '@src/Components/MobileComponents/FooterMobile/FooterMobile';
import { GetCookie } from '@src/cookie/cookie';
import { useEffect } from 'react';
import { useAppDispatch } from '@src/redux/store';
import { getAuthMe } from '@src/api/authApi/authThunks';

function LayoutWithHeader() {

    const isMobile = useMediaQuery({
        query: '(max-width: 890px)',
    });
    const dispatch = useAppDispatch();

    const isAccessTokenExists = Boolean(GetCookie("access"));

    useEffect(() => {
        if (isAccessTokenExists) {
            dispatch(getAuthMe());
        }
    }, [isAccessTokenExists]);

    return (
        <div className={styles.LayoutWithHeader}>
            <Header />
            <Outlet />
            {isMobile ? <FooterMobile /> : <Footer />}
            <ModalContainer />
        </div>
    )
}

export default LayoutWithHeader;