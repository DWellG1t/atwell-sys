import styles from "./SD.module.scss"

export default function SD() {
    return (
        <>
            <section className={ styles.SD }>
                <div className={ styles.SD__container + " _container"}>
                    <p>ИП Жукавин Денис Васильевич</p>
                    <p>Все права защищены © 2023</p>
                </div>
            </section>

        </>
    )

}