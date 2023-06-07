import styles from "./footer.module.scss";

import Typed from 'react-typed';

import AOS from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    AOS.init({
    duration: 2000,
    once: false});
})

    return (
      <>
        <footer className={ styles.footer }>
          <div className={styles.footer__container + " _container"}>
            <div className={styles.footer__terminal }>
              <h2>Контакты</h2>
              <p>Телефон: +7 (977) 591-82-92</p>
              <p>E-mail: gm.dat.well@gmal.com</p>
              <div className={styles.footer__root}>
                <h2>denis@service:~$</h2>
                <p>
                  <Typed
                    strings={[
                        "Оставить заявку",
                        "Дождаться звонка",
                        "Программист",
                        "Дождаться звонка",
                    ]}
                    typeSpeed={70}
                    loop={true}
                    startDelay={1000}
                  />
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
}