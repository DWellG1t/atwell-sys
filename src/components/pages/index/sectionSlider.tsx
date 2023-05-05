/* eslint-disable react/jsx-key */
import styles from "./sectionSlider.module.scss";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { useState } from "react";

export default function SectionSlider() {

    const [slide, setSlide] = useState(1);
    
    return (
        <>
            <section className={styles.sectionSlider}>
                <div className={styles.sectionSlider__container + " _container"}>
                        {[
                            ["/img/pages/index/handshake.svg", "Wow"],
                            ["/img/pages/index/handshake.svg", "ok"],
                            ["/img/pages/index/handshake.svg", "fine"],
                            ["/img/pages/index/handshake.svg", "yep"],
                            ["/img/pages/index/handshake.svg", "super"],

                        ].map((el, i) => {
                            return ( 
                            <div key={i} className={styles.sectionSlider__slide + (slide == ++i ? ` ${styles._active}` : "")}>
                                <div className={"_ibg"}>
                                <img src={el[0]} alt="" />
                                </div>
                                <h1>{el[1]}</h1>
                            </div>
                             )
                            })
                        }

                    <nav className={styles.sectionSlider__nav}>
                        <SlArrowLeft onClick={() => { slide != 1 ? setSlide(prev => --prev) : "" }} className={styles.sectionSlider__arrow}/>
                        {[1, 2, 3, 4, 5].map((el, index) => {
                            return ( <li key={index} className={slide == el ? styles._active : ""} onClick={ () => { setSlide(el) } }></li> )
                        })}
                        <SlArrowRight onClick={() => { slide != 5 ? setSlide(prev => ++prev) : "" }} className={styles.sectionSlider__arrow}/>
                    </nav>
                </div>
            </section>
        </>
    )


}