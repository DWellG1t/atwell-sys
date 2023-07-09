import styles from "./mobileMenu.module.scss";
import Typed from 'react-typed';

import { BsChevronUp } from "react-icons/bs";

import { useSelector, useDispatch } from "react-redux";
import { setActiveMobile } from "@/store/mobileSlice";

export default function MobileMenu() {
    const mobileActive = useSelector((state: any) => state.mobile.mobileActive);
    const dispatch = useDispatch();

    return (
        <section className={styles.sectionMobile + (mobileActive ? ` ${styles._active}` : "")}>
            {/* Head */}
            <div className={styles.sectionMobile__header}>
                <div className={styles.sectionMobile__logo}>
                    <img src="./img/templates/logo.svg" alt=""  className="_logo"/>
                </div>
                <div className={styles.sectionMobile__cross +  " _cross"} onClick={() => { dispatch(setActiveMobile(''))}} ></div>
            </div>

            {/* Menu  */}
            <ul>
                {["","", 1, 3 , 5].map((el, index) => {
                    return (                
                    <li key={index+1} onClick={event => { event.currentTarget.classList.toggle(styles._active)}}>
                    <h2>Компьютеры <span><BsChevronUp /></span></h2>
                    <div className="">
                        <p>Чистка</p>
                        <p>Ремонт</p>
                        <p>Чистка</p>
                        <p>Ремонт</p>
                        <p>Ремонт</p>
                        <p>Ремонт</p>


                    </div>
                </li>)
                })}


                
            </ul>
            
            <div className={styles.sectionMobile__terminal}>
                <p>7 977 5918 92 92 </p>
                <p>фывафыв</p>
            </div>
        </section>
        
    )
}