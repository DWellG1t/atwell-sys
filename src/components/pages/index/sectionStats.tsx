import styles from "@/styles/pages/index/sectionStats.module.scss";

export default function SectionStats() {
    return (
    <>
        <section className={ styles.sectionStats }>
            <div className={`${styles.sectionStats__container} _container`}>
                <ul className={ styles.sectionStats__list }>
                {[
                    ["17", "Довольных клиентов"], 
                    ["21", "Выполненный заказ"], 
                    ["2", "года работы"], 
                    ["4", "постоянных партнера"],
                    ["10", "различных видов услуг"],
                ].map((el, index) => {
                    return (
                    // eslint-disable-next-line react/jsx-key
                    <li className={ styles.sectionStats__el }>
                        <h1> {el[0] }</h1>
                        <p> {el[1]} </p>
                    </li>)
                })}
                </ul>
            </div>
        </section>
    
    </>
    )
}