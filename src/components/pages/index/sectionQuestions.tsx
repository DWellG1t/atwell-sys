import styles from "./sectionQuestions.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

export default function SectionQuestions() {


    return (
        <section className={styles.sectionQuestions}>
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
                        <ul key={index}>
                            <li>
                                <h1>{el.h2}</h1>
                                <div>2</div>
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
                        <ul key={index}>
                            <li>
                                <h1>{el.h2}</h1>
                                <div>2</div>
                            </li>
                            <li>
                                <p>{el.p}</p>
                            </li>
                        </ul>
                        )
                    })}
                </div>      
            </div>

        </section>
    )
}``