import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <footer className={ styles.footer }>
          <div className={`${styles.footer__container} _container`}>
            <div className={styles.footer__text}>
              <h1>Свяжитесь со мной</h1>
              <p>Работаю с 9.00 - 22.00</p>
              <p>Работаю с 9.00 - 22.00</p>
              <p>Работаю с 9.00 - 22.00</p>
              <p>+7 977 591 82 92</p>

            </div>

            <form action="/api" method="post" className={styles.footer__form}>
              <input type="text" placeholder="Имя"/>
              <input type="text" placeholder="Телефон"/>
              <textarea name="" id="" cols={30} rows={10} placeholder="Сообщение"></textarea>
              <button className="_button">Отправить</button>
            </form>


          </div>
        </footer>
    )
}