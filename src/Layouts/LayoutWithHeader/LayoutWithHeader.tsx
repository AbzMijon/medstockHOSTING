import { Outlet } from 'react-router-dom';
import Header from 'src/Components/Header/Header';
import styles from './LayoutWithHeader.module.scss';
import Footer from 'src/Components/Footer/Footer';
import ModalContainer from 'src/Components/ModalContainer/ModalContainer';
import { useMediaQuery } from 'react-responsive';
import FooterMobile from '@src/Components/MobileComponents/FooterMobile/FooterMobile';

function LayoutWithHeader() {

    const isMobile = useMediaQuery({
        query: '(max-width: 890px)',
    });

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