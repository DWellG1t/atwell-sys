import styles from "./header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

// 
import { useDispatch, useSelector } from "react-redux";

import { FaHeart } from "react-icons/fa";
import { BiDesktop } from "react-icons/bi";

export default function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.header__row_1}>
                <div className={styles.header__container + " _container"}>
                    <div className={styles.header__logo}>
                        <div>
                            <FaHeart />
                        </div>
                        <div>
                            <h1>Денис</h1>
                            <p>Компьютерный мастер</p>
                        </div>
                    </div>

                    <nav className={styles.header__nav}>
                        {
                            [
                                {href: "", txt: "Обо мне"},
                                {href: "", txt: "Цены"},
                                {href: "", txt: "Блог"},
                                
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
                        <button className={"_button_v2 _button"}>Связаться</button>
                        <div>
                            <h1>+7 977 591 82 92</h1>
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
                                                        <p key={index}>{el[0]} {el[1]}</p>
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