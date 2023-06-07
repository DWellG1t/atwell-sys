import styles from "./subfooter.module.scss";

import { BsFillHeartFill} from "react-icons/bs";

export default function Subfooter() {
    return (
        <section className={styles.sectionSubfooter}>
            <div className={styles.sectionSubfooter__container + " _container"}>
                <p>Copyright © 2022 - 2023 ИП Жукавин Денис Васильевич. Все права защищены.</p>
                <p>Сделано с любовью&nbsp;<span><BsFillHeartFill /></span>&nbsp;Atwell Studio</p>
            </div>
        </section>
    )
}