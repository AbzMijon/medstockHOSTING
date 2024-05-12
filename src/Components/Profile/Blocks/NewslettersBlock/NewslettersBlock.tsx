import DefaultButton from '@src/Components/DefaultButton/DefaultButton';
import styles from './newslettersBlock.module.scss';
import newsLettersImg from '@assets/img/newsLetters.png';

function NewslettersBlock() {
    return (
        <div className={styles.newslettersBlock}>
            <div className={styles.newslettersBlock__container}>
                <p className={styles.newslettersBlock__title}>Рассылки</p>
                <div className={styles.newslettersBlock__content}>
                    <img src={newsLettersImg} alt="" className={styles.newslettersBlock__img} />
                    <p className={styles.newslettersBlock__subtitle}>Получайте обновления о продуктах, предложениях и преимуществах для участников.</p>
                    <div className={styles.newslettersBlock__item_input}>
                        <input 
                            type="checkbox" 
                            className={styles.newslettersBlock__checkbox} 
                            id={'newsLettersConfirm'}
                        />
                        <label 
                            htmlFor={'newsLettersConfirm'}
                            className={styles.newslettersBlock__checkbox_text}
                        >
                            Да, присылайте мне электронные письма
                        </label>
                    </div>
                    <DefaultButton
                        text='Сохранить'
                        type='primary'
                        onClick={() => null}
                        className={styles.newslettersBlock__btn}
                    />
                </div>
            </div>
        </div>
    )
}

export default NewslettersBlock;