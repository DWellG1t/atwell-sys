import styles from "./sectionReviews.module.scss";

import { BsStarHalf, BsStarFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css/bundle';

import AOS from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";

export default function SectionReviews() {
    useEffect(() => {
        AOS.init({
        duration: 2000,
        once: false});
    })

    return (
        <section className={styles.sectionReviews}>
            <Swiper data-aos="fade-left"
                className={styles.sectionReviews__slider}
                modules={[Autoplay, Pagination, Navigation]}

                spaceBetween={10}

                slidesPerView={4}

                centeredSlides={false}

                allowTouchMove={true}

                speed={2000}

                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                loop={true}
                >
                {[
                    {photo: "https://35photo.pro/photos_main/169/847678.jpg", name: "Павел", date: "19.11.2001", review: "Все супер, Отличный сервис!", stars: (                    
                    <ul>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                    </ul>)},
                    {photo: "https://35photo.pro/photos_main/169/847678.jpg", name: "Павел", date: "19.11.2001", review: "Все супер, Отличный сервис!", stars: (                    
                    <ul>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                    </ul>)}, 
                                        {photo: "https://35photo.pro/photos_main/169/847678.jpg", name: "Павел", date: "19.11.2001", review: "Все супер, Отличный сервис!", stars: (                    
                    <ul>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                    </ul>)},
                                        {photo: "https://35photo.pro/photos_main/169/847678.jpg", name: "Павел", date: "19.11.2001", review: "Все супер, Отличный сервис!", stars: (                    
                    <ul>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                    </ul>)},
                                        {photo: "https://35photo.pro/photos_main/169/847678.jpg", name: "Павел", date: "19.11.2001", review: "Все супер, Отличный сервис!", stars: (                    
                    <ul>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                    </ul>)},
                                        {photo: "https://35photo.pro/photos_main/169/847678.jpg", name: "Павел", date: "19.11.2001", review: "Все супер, Отличный сервис!", stars: (                    
                    <ul>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                    </ul>)},
                                        {photo: "https://35photo.pro/photos_main/169/847678.jpg", name: "Павел", date: "19.11.2001", review: "Все супер, Отличный сервис!", stars: (                    
                    <ul>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                    </ul>)}, 
                                        {photo: "https://35photo.pro/photos_main/169/847678.jpg", name: "Павел", date: "19.11.2001", review: "Все супер, Отличный сервис!", stars: (                    
                    <ul>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                    </ul>)},
                                        {photo: "https://35photo.pro/photos_main/169/847678.jpg", name: "Павел", date: "19.11.2001", review: "Все супер, Отличный сервис!", stars: (                    
                    <ul>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                    </ul>)},
                ].map((el, index) => {
                    return (
                        <SwiperSlide key={index+1}>
                            <div className={styles.sectionReviews__review}>
                                <div className={styles.sectionReviews__client}>

                                    <div className={styles.sectionReviews__img + " _ibg"}>
                                        <img src={el.photo} alt="" />
                                    </div>

                                    <p>{el.name}</p>
                                </div>

                                <div className={styles.sectionReviews__info}>
                                    <p>{el.date}</p>
                                    <h2>{el.review}</h2>
                                    {el.stars}
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                        
            </Swiper>
            
            
            
            
            

        </section>  
    )
}