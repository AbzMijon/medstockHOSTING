import DefaultButton from 'src/Components/DefaultButton/DefaultButton'
import styles from './itemOptionCard.module.scss';

type Props = {
    option: any;
}

function ItemOptionCard({ option }: Props) {

    const handleSelectOption = (id: number) => {

    }

    return (
        <li className={styles.itemOptionCard}>
            <div className={styles.itemOptionCard__img_wrap}>
                <img src={option?.src} alt="" className={styles.itemOptionCard__item_img} />
                <DefaultButton
                    text='Добавить'
                    type='primary'
                    onClick={() => handleSelectOption(option.id)}
                    className={styles.itemOptionCard__hover_btn}
                />
            </div>
            <p className={styles.itemOptionCard__item_name}>{option?.title}</p>
            <p className={styles.itemOptionCard__item_price}>{option?.price}</p>
            <div className={styles.itemOptionCard__item_input}>
                <input 
                    type="checkbox" 
                    className={styles.itemOptionCard__checkbox} 
                    id={option.title}
                    checked={option.select}
                />
                <label 
                    htmlFor={option.title}
                    className={styles.itemOptionCard__checkbox_text}
                >
                </label>
            </div>
        </li>
    )
}

export default ItemOptionCard