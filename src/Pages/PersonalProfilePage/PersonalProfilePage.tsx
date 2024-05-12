import LeftNavigationBlock from '@src/Components/Profile/LeftNavigationBlock/LeftNavigationBlock';
import styles from './personalProfilePage.module.scss';
import { useSelector } from 'react-redux';
import { profileMenuSelector } from '@src/redux/reducers/personalProfileReducer/personalProfileSelector';
import PersonalProfileChangeBlock from './PersonalProfileChangeBlock';
import { useParams } from 'react-router-dom';

function PersonalProfilePage() {

    const profileMenu = useSelector(profileMenuSelector);
    const { tab: pathItem } = useParams();

    return (
        <div className={styles.profile}>
            <div className={styles.profile__container}>
                <div className={styles.profile__menu}>
                    <LeftNavigationBlock
                        menuData={profileMenu}
                    />
                </div>
                <PersonalProfileChangeBlock
                    pathItem={pathItem}
                />
            </div>
        </div>
    )
}

export default PersonalProfilePage;