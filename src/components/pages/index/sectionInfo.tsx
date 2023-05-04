import styles from "@/styles/pages/index/sectionInfo.module.scss";

export default function SectionInfo() {
    return (
        <>
            <section className={styles.sectionInfo}>
                <div className={styles.sectionInfo__container + " _container"}>
                    <div className={styles.sectionInfo__text}>
                        <h1>Многолетний опыт</h1>
                        <p>Оказываю услуги от балды, деньги вперед. Гарантий нет, на ваш страх и риск. Цены выше рынка, сертификации нет. Зато честно</p>
                    </div>
                    <div className={styles.sectionInfo__img + " _ibg"}>
                        <img src="https://image.mel.fm/i/L/LbPQOwnPN3/640.jpg" alt="" />
                    </div>

                </div>
            </section>
        </>

    )

}