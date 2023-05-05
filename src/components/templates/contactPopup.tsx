import styles from "./contactPopup.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { setActive } from "@/store/popupSlice";

export default function ContactPopup() {

    let popupActive: any = useSelector((state: any) => state.popup.active); // popup - название reducer в store (slice - просто расширение reducers), active - его значение. state здесь относится к slice!
    const dispatch = useDispatch();

    return (
    <>
    <div onClick={() => { dispatch( setActive('')) } } className={ styles.backgroundDark + (popupActive ? ` ${styles._active}` : "")}></div>
      <div className={styles.popupContact + (popupActive ? ` ${styles._active}` : "")} >
        {/* Right */}
        <div className={styles.popupContact__left}>
          <h1>Как я работаю</h1>
          <ul>
            <li>▻ 9.00 - 22.00</li>
            <li>▻ пн-пт</li>
            <li>▻ без выходных</li>
            <li>▻ без выходных</li>
          </ul>
          <p>
            Свяжитесь со мной в любое время!
          </p>
        </div>

        {/* Left */}
        <div className={styles.popupContact__right}>
          <div className={styles.popupContact__cross} onClick={() => {dispatch( setActive(''))}}></div>
          <form action="">
            <h1>
              Связаться со мной
            </h1>

            <div>
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Телефон" />
              <textarea placeholder="Сообщение" />
            </div>

            <button className="_button" type='submit'>Отправить</button>
          </form>
        </div>
      </div>
    </>
    )
}