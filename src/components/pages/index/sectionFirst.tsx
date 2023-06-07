import styles from "./sectionFirst.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { setActive } from "@/store/popupSlice";
// import type     

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css/bundle';

// Typed
// import Typed from "typed.js";
import { useEffect, useRef } from "react";

import Typed from 'react-typed';

export default function SectionFirst() {
    // useEffect(() => {
    //     const typed = new Typed("#typed", {
    //         strings: [
    //             'Компьютерный мастер', 
    //             'Программист', 
    //             'Системный администратор'
    //         ],
    //         typeSpeed: 100,
    //         backSpeed: 0,
    //         fadeOut: true,
    //         loop: true
    //     })
    // })

    const dispatch = useDispatch();
    const stats = useSelector((state: any) => state.popup)

    return (
        <section className={styles.sectionFirst}>
            <div className={styles.sectionFirst__container + " _container"}>
                <div className={styles.sectionFirst__data}>
                    <div className={styles.sectionFirst__info}>
                        <div className={" _text"}>
                            <h1>Компьютерный мастер</h1>
                            {/* <h2><span id="typed"></span></h2> */}
                            <h2>Denis@service:~$&nbsp; 
                                <Typed className={styles.sectionFirst__typed}
                                    strings={[
                                        'программист',
                                        'сис. администратор',
                                        'просто няшка',
                                    ]}
                                    typeSpeed={70}
                                    loop={true}
                                    
                                />
                            </h2>
                            
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officiis cumque fuga adipisci quaerat optio! Praesentium velit tenetur, quibusdam, voluptas odio accusamus quaerat ab quod sunt, nesciunt vero quisquam dolor.</p>
                        </div>
                        <button className={" _button"} onClick={ () => { dispatch(setActive('')); }} >Связаться</button>
                    </div>
                    <div className={styles.sectionFirst__img + " _ibg"}>
                        <img src="https://thumbs.dreamstime.com/b/%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85-%D1%81%D0%B8%D0%B4%D0%B8%D1%82-%D0%BD%D0%B0-%D0%BA%D0%BB%D0%B0%D0%B2%D0%B8%D0%B0%D1%82%D1%83%D1%80%D0%B5-%D0%BF%D0%B5%D1%80%D0%B5%D0%B4-%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BE%D0%BC-194659160.jpg" alt="" />
                    </div>
                </div>

                <div className={styles.sectionFirst__terminal}> 
                    {/* Swiper  */}
                    <Swiper
                        className={styles.sectionFirst__news}
                        modules={[Autoplay, Pagination, Navigation]}

                        spaceBetween={0}

                        slidesPerView={5}

                        centeredSlides={false}

                        allowTouchMove={false}

                        speed={2000}

                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        loop={true}

                        // pagination={{
                        // clickable: true,
                        // }}
                        // navigation={true}
                        >
                        {[
                            "Ремонт ПК",
                            "Качество",
                            "Скидки",
                            "Качество",
                            "скидка 50%",
                            "Москва",
                            "Качество",
                            "Москва",
                            "Профи",
                            "Москва",
                            "Качество",
                            "Москва",
                        ].map((el, index) => {
                            return (
                                <SwiperSlide key={index}>{el}</SwiperSlide>
                            )
                        })}
                        
                    </Swiper>

                    {/* <p> _</p> */}
                </div>
            </div>




        </section>
    )
}