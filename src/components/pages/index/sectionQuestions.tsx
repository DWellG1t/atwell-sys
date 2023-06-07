import styles from "./sectionQuestions.module.scss";

import AOS from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";

import { BsChevronUp } from "react-icons/bs";

import { useState } from "react";

export default function SectionQuestions() {
    useEffect(() => {
        AOS.init({
        duration: 2000,
        once: false});
    })


    return (
        <section className={styles.sectionQuestions}>
            <div  data-aos="fade-left">
            <div className={styles.sectionQuestions__title + " _container"}>
                <h1>Ответы на вопросы</h1>
            </div>

            <div className={styles.sectionQuestions__container + " _container"}>
                
                <div className={styles.sectionQuestions__column + " " + styles.sectionQuestions__column_1}>
                    {[
                        {h2: "Как скоро я приеду?", p: "Наши Наши специалисты обычно выезжают в течение 30-60 миНаши специалисты обычно выезжают в течение 30-60 миНаши специалисты обычно выезжают в течение 30-60 миНаши специалисты обычно выезжают в течение 30-60 миНаши специалисты обычно выезжают в течение 30-60 ми обычно выезжают в течение 30-60 минут по Москве и ближнему Подмосковью."},
                        {h2: "Как скоро я приеду?", p: "Наши специалисты обычно выезжают в течение 30-60 минут по Москве и ближнему Подмосковью."},
                        {h2: "Как скоро я приеду?", p: "Наши специалисты обычно выезжают в течение 30-60 минут по Москве и ближнему Подмосковью. "},
                    ].map((el, index) => {
                        return (
                        <ul onClick={event => { event.currentTarget.classList.toggle(styles._active) }} key={index+1}>
                            <li>
                                <h1>{el.h2}</h1>
                                <div><BsChevronUp /></div>
                            </li>
                            <li>
                                <p>{el.p}</p>
                            </li>
                        </ul>
                        )
                    })}

                </div>

                <div className={styles.sectionQuestions__column + " " + styles.sectionQuestions__column_2}>
                    {[
                        {h2: "Как скоро я приеду?", p: "Наши специалисты обычно выезжают в течение 30-60 минут по Москве и ближнему Подмосковью."},
                        {h2: "Как скоро я приеду?", p: "Наши специалисты обычно выезжают в течение 30-60 минут по Москве и ближнему Подмосковью."},
                        {h2: "Как скоро я приеду?", p: "Наши специалисты обычно выезжают в течение 30-60 минут по Москве и ближнему Подмосковью."},
                    ].map((el, index) => {
                        return (
                        <ul key={index} onClick={event => { event.currentTarget.classList.toggle(styles._active) }}>
                            <li>
                                <h1>{el.h2}</h1>
                                <div><BsChevronUp /></div>
                            </li>
                            <li>
                                <p>{el.p}</p>
                            </li>
                        </ul>
                        )
                    })}
                </div>      
            </div>
            </div>
        </section>
    )
}``