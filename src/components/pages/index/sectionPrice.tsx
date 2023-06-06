import styles from "./sectionPrice.module.scss";

export default function SectionPrice() {
    return (
        <section className={styles.sectionPrice}>
            <div className={styles.sectionPrice__container + " _container"}>
                <h1>Цены</h1>
                <ul>
                    <h1>
                        <div>Услуга</div>
                        <div>Место</div>
                        <div>Гарантия</div>
                        <div>Цена</div>
                    </h1>
                    {
                    [
                        {serv: "чистка ПК", place: "у вас дома", warranty: "от 1 года", price: "100 руб."},
                        {serv: "чистка ПК", place: "у вас дома", warranty: "от 1 года", price: "100 руб."},
                        {serv: "чистка ПК", place: "у вас дома", warranty: "от 1 года", price: "100 руб."},
                        {serv: "чистка ПК", place: "у вас дома", warranty: "от 1 года", price: "100 руб."},

                    ].map((el, index) => {
                        return (
                            <li key={index+1}>
                                <div>{el.serv}</div>
                                <div>{el.place}</div>
                                <div>{el.warranty}</div>
                                <div>{el.price}</div>
                            </li>
                        )
                    })
                    }   
                </ul>
            </div>
        </section>
    )
}