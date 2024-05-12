import styles from './articullSection.module.scss';
import viewBlogImg from '@assets/img/viewBlockImg.png';
import viewBlogCover from '@assets/img/viewBlogCover.png';

function ArticullSection() {
    return (
        <div className={styles.articull}>
            <img src={viewBlogCover} alt="" className={styles.blockPageById__cover_top} />
            <div className={styles.articull__body}>
                <div className={styles.articull__contentBlock}>
                    <p className={styles.articull__title}>Техническое обслуживание медицинской техники и систем подачи медицинских газов</p>
                    <p className={styles.articull__date}>Декабрь 22,2023</p>
                    <p className={styles.articull__text}>Мы рады поделиться с вами новостью о запуске модуля автоматического репрайсинга для Wildberies.ru. Теперь вы можете управлять конечной ценой для покупателя: не бояться того что бесконтрольные скидки приведут к проблемам с поставщиками и не терять маржу там где этого можно было бы избежать.</p>
                </div>
                <div className={styles.articull__contentBlock}>
                    <p className={styles.articull__contentTitle}>Ключевые возможности модуля</p>
                    <ul className={styles.articull__list}>
                        <li className={styles.articull__list_item}>Работа через API Wildberies позволяет вносить изменения в ваши цены без посредников и максимально быстро.</li>
                        <li className={styles.articull__list_item}>Таргетирование любых цен, это возможность учесть СПП, соинвест от маркетплейса и не беспокоится о том что цена будет меняться без вашего ведома</li>
                        <li className={styles.articull__list_item}>Гибкая настройка стратегий ценообразования позволяет учитывать огромное количество параметров чтобы принять наилучшее решение. Вы можете опираться не только на данные о ценах (своих и конкурентов), но и учесть, например, свои остатки, динамику спроса и другие параметры.</li>
                    </ul>
                </div>
                <div className={styles.articull__contentBlock}>
                    <p className={styles.articull__contentTitle}>Что нужно для работы и сколько это стоит?</p>
                    <p className={styles.articull__text}>Для запуска репрайсинга нам понадобится ключ доступа к API вашего кабинета и ID магазина. Кроме того нужен будет прайс-лист с товарами которые вы хотите подключить к автоматическому изменению цен и описание стратегии ценообразования.</p>
                    <p className={styles.articull__subtext}>И конечно подходящий для работы тариф.</p>
                </div>
                <div className={styles.articull__contentBlock}>
                    <p className={styles.articull__contentTitle}>Стоимость репрайсинга на вайлдбериз зависит от</p>
                    <ul className={styles.articull__list}>
                        <li className={styles.articull__list_item}>объема прайс-листа для работы</li>
                        <li className={styles.articull__list_item}>количества кабинетов (если у вас их несколько)</li>
                        <li className={styles.articull__list_item}>частоту проверки/обновления цен (мы поможем вам подобрать оптимальную частоту изходя из ваших потребностей)</li>
                    </ul>
                </div>
                <div className={styles.articull__contentBlock}>
                    <p className={styles.articull__contentTitle}>Как попробовать?</p>
                    <p className={styles.articull__text}>Тут все просто, как обычно - обратитесь в службу поддержки (через чат или тикет-систему), а если у вас еще нет аккаунта - зарегистрируйтесь и получите возможность оценить наши преимущества.</p>
                    <img src={viewBlogImg} alt="" className={styles.articull__list_img} />
                </div>
            </div>
        </div>
    )
}

export default ArticullSection;