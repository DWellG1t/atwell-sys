import styles from "./sectionPrice.module.scss";

import { BsChevronUp } from "react-icons/bs";

import { useState } from "react";

import AOS from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";

export default function SectionPrice() {
    useEffect(() => {
        AOS.init({
        duration: 2000,
        once: false});
    })

    const [table, setTable] = useState(false);

    return (
        <section className={styles.sectionPrice}>
            <div className={styles.sectionPrice__container + " _container"} data-aos="fade-right">
                <h1>Цены</h1>
                <ul className={table ? styles._active : ""}>
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
                        {serv: "чистка ПК", place: "у вас дома", warranty: "от 1 года", price: "100 руб."},
                        {serv: "чистка ПК", place: "у вас дома", warranty: "от 1 года", price: "100 руб."},
                        {serv: "чистка ПК", place: "у вас дома", warranty: "от 1 года", price: "100 руб."},
                        {serv: "чистка ПК", place: "у вас дома", warranty: "от 1 года", price: "100 руб."},
                        {serv: "чистка ПК", place: "у вас дома", warranty: "от 1 года", price: "100 руб."},
                        {serv: "чистка ПК", place: "у вас дома", warranty: "от 1 года", price: "100 руб."},
                        {serv: "чистка ПК", place: "у вас дома", warranty: "от 1 года", price: "100 руб."},
                        {serv: "чистка ПК", place: "у вас дома", warranty: "от 1 года", price: "100 руб."},
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
                    <div className={styles.sectionPrice__shadow}>
                        
                    </div>  
                </ul>

                <div className={styles.sectionPrice__arrow} onClick={() => { setTable(prev => !prev)}}>
                    <span><BsChevronUp/></span>
                </div>  

            </div>
        </section>
    )
}