import styles from './homePage.module.scss';
import WelcomeSection from 'src/Components/MainPage/WelcomeSection/WelcomeSection';
import Advantages from 'src/Components/MainPage/Advantages/Advantages';
import HelpfulInfo from 'src/Components/MainPage/HelpfulInfo/HelpfulInfo';

function HomePage() {
    return (
        <div className={styles.home}>
            <WelcomeSection />
            <Advantages />
            <HelpfulInfo />
        </div>
    )
}

export default HomePage