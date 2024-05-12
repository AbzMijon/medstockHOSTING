import { useState } from 'react';
import styles from './personalBlock.module.scss';
import ChangePassBlock from './ChangePassBlock/ChangePassBlock';
import PersonalInfoBlock from './PersonalInfoBlock/PersonalInfoBlock';

function PersonalBlock() {

    const [isChagePassBlock, setIsChagePassBlock] = useState<boolean>(false);

    return (
        <div className={styles.personalBlock}>
            {isChagePassBlock ? (
                <ChangePassBlock setIsChagePassBlock={setIsChagePassBlock} />
            ) : (
                <PersonalInfoBlock setIsChagePassBlock={setIsChagePassBlock} />
            )}
        </div>
    )
}

export default PersonalBlock;