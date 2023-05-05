import styles from "./sectionTitle.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { setActive } from "@/store/popupSlice"; // setActive был экспортирован в срезе (для dispatch)

// Backgroung img
import bg from "@/../public/img/pages/index/background.svg"

export default function SectionTitle() {

  // Достаточно просто вызвать useSelector (хранилише уже доступно)
  let popupActive: any = useSelector((state: any) => state.popup.active); // popup - название reducer в store (slice - просто расширение reducers), active - его значение. state здесь относится к slice!
  // const dispatch = useDispatch(setActive("value")); // Вызываем определенный action, который изменяет состояние
  const dispatch = useDispatch(); // нужно, чтобы вызывать dispatch в событиях

  return (
    <>
      <section className={ styles.sectionTitle } >
        {/* background */}
        <div className={`${styles.sectionTitle__container} _container`} style={{ backgroundImage: `url(${bg.src})` }}>
          <div className={styles.sectionTitle__txt} >
            <h1>Комплексное IT обслуживание организаций</h1>
            <p>Более 9 лет мы занимаемся полным сервисным обслуживанием компьютерной техники</p>
            <button className="_button" onClick={ () => { dispatch( setActive('')); } }>Связаться</button>
          </div>

          <div className={`${styles.sectionTitle__img} _ibg`}>
            <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
