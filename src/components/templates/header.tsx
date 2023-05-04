import styles from "@/styles/templates/header.module.scss";
import Link from "next/link";

// button
import { setActive } from "@/store/popupSlice";
import { useDispatch } from "react-redux";



export default function Header() {

    const dispatch = useDispatch();

    return (
    <>
        <header className={styles.header}>
            <div className={`${styles.header__container} _container`}>
            <ul className={styles.header__list}>

                <li className={styles.header__logo}>
                <img src="/img/pages/index/logo.svg" alt="" />
                <div>
                    <h1>Денис</h1>
                    <p>Компьютерный мастер</p>
                </div>
                </li>

                <nav className={styles.header__nav}>
                    <p><Link href={"/blog"}>Услуги</Link></p>
                    <p><Link href={"/blog"}>Блог</Link></p>
                    <p><Link href={"/blog"}>Контакты</Link></p>
                </nav>

                <li className={styles.header__contacts}>
                <button className="_button" onClick={() => { dispatch( setActive('')) } }> Связаться</button>
                <div>
                    <a href="tel:+79775918292">+7(977) 591-82-92</a>
                    <a href="mailto:gm.dat.well@gmail.com">gm.dat.well@gmail.com</a>
                </div>
                </li>
            </ul>
            </div>
        </header>
    </>
    )
}