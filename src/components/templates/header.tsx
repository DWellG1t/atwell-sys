import styles from "./header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

// 
import { useDispatch, useSelector } from "react-redux";
import { setActivePopup } from "@/store/popupSlice";
import { setActiveMobile } from "@/store/mobileSlice";

import { FaHeart } from "react-icons/fa";
import { BiDesktop } from "react-icons/bi";

export default function Header() {
    const dispatch = useDispatch();

    const mobileActive = useSelector((state: any) => state.mobile.mobileActive);


    return (
        <header className={styles.header}>
            <div className={styles.header__row_1}>
                <div className={styles.header__container + " _container"}>
                    
                    <div className={styles.header__burger + (mobileActive ? ` ${styles._active}` : "")} onClick={() => { dispatch(setActiveMobile('')) } }>
                            <span></span>
                        </div>
                    
                    <div className={styles.header__logo}>
                        <div className={styles.header__logoIcon}>
                            <img src="/img/templates/logo.svg" alt="" />
                        </div>
                        <div>
                            <h1>Денис</h1>
                            <p>Компьютерный мастер</p>
                        </div>
                    </div>

                    <nav className={styles.header__nav}>
                        {
                            [
                                {href: "/", txt: "Главная"},
                                {href: "/price", txt: "Цены"},
                                {href: "/blog", txt: "Контакты"},
                                
                            ].map((el, index) => {
                                return (
                                    <div key={index} >
                                        <Link href={el.href}>{el.txt}</Link>
                                    </div>   
                                )
                            })
                        }
                    </nav>

                    <div className={styles.header__contact}>
                        <button className={"_button_v2 _button"} onClick={() => { dispatch(setActivePopup(''))} }>Связаться</button>
                        <div>
                            <h1>
                            +7 977 591 82 92
                                {/* <Link href={"tel:9775918292"}></Link> */}
                            </h1>
                            <p>gm.dat.well@gmail.com</p>
                        </div>
                    </div>


                </div>
            </div>

            <div className={styles.header__row_2}>
                <div className={styles.header__container + " _container"}>
                    <nav>
                        <ul>
                            {
                                [
                                    {text: "Компьютеры", service: [
                                        [<BiDesktop key={0}/>,"Сборка ПК"],
                                        [<BiDesktop key={0}/>,"Диагностика"],
                                        [<BiDesktop key={0}/>,"Чистка вирусов"],
                                        [<BiDesktop key={0}/>,"Сборка ПК"],
                                    ]},
                                    {text: "Ноутбуки", service: [
                                        [<BiDesktop key={0}/>,"Сборка ПК"],
                                        [<BiDesktop key={0}/>,"Диагностика"],
                                        [<BiDesktop key={0}/>,"Чистка вирусов"],
                                        [<BiDesktop key={0}/>,"Сборка ПК"],
                                    ]},
                                    {text: "Оргтехника"},
                                    {text: "Интернет"},
                                    {text: "Данные"},
                                ].map((el, index) => {
                                    return (
                                        <li key={index}>
                                            <p>{el.text}</p>
                                            <div className={styles.header__dropdown}>
                                                {el.service?.map((el, index) => {
                                                    return (
                                                        <p key={index} onClick={ () => { dispatch(setActivePopup(el[1])) } }>
                                                            {el[0]} {el[1]}
                                                        </p>
                                                    )
                                                })}
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}