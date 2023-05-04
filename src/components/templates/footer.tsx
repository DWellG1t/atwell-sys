import styles from "@/styles/templates/footer.module.scss";

export default function Footer() {
    return (
        <footer className={ styles.footer }>
          <div className={`${styles.footer__container} _container`}>
            {/* Logo */}
            <div className={ styles.footer__logo }>
                <div className={`${styles.footer__img} _ibg`}>
                  <img src="/img/pages/index/logo.svg" alt="" />
                </div>
                <div className={ styles.footer__text }>
                  <div>
                    <h1>Денис</h1>
                    <p>Компьютерный мастер</p>
                  </div>
                  <p className={styles.footer__ip}>ИП Жукавин Денис Васильевич</p>
                </div>
            </div>

            {/* Contacts */}
            <div className={styles.footer__contacts}>
              <div>
                <h1>+79775918292</h1>
                <p>gm.dat.well@gmail.com</p>
              </div>
              {/* <button className="_button" onClick={() => {setPopupContact(prev => !prev)}}>Оставить заявку</button> */}
            </div>

          </div>
        </footer>
    )
}