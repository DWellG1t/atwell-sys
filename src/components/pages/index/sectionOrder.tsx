import styles from "./sectionOrder.module.scss";

import Typed from 'react-typed';

export default function SectionOrder() {
    return (
        <section className={styles.sectionOrder}>

        <div className={styles.sectionOrder__container + " _container"}>
            <div className={styles.sectionOrder__terminal}>
                <div className={""}>
                    <h2> Порядок оказания услуги</h2>
                    <ul>
                        {[
                            "Оставить заявку",
                            "Дождаться звонка",
                            "Программист",
                            "Дождаться звонка",

                        ].map((el, index) => {
                            return (
                                <li key={index}>{index+1}.&nbsp;                    
                                    {el}
                                </li>
                            )
                        })}

                    </ul>

                    <h2 className={styles.sectionOrder__root}>
                        <p>Denis@service:~$&nbsp;</p>
                        <p>                        <Typed className={styles.sectionFirst__typed}
                                        strings={[
                                            "Оставить заявку",
                                            "Дождаться звонка",
                                            "Программист",
                                            "Дождаться звонка",
                                        ]}
                                        typeSpeed={70}
                                        loop={true}
                                        startDelay={1000}
                                    /></p>

                    </h2>

                </div>
            </div>

            <form action="">
                <ul>
                    <li>
                        <input type="tel" placeholder="+7 977 591 82 92"/>
                        <input type="email" placeholder="gm.dat.well@gmail.com"/>
                    </li>

                    <li>
                        <input name="" id="" placeholder="Как к вам обращаться"></input>                
                    </li>                    

                    <li>
                        <input name="" id="" placeholder="Сообщение"></input>
                    </li>

                    <li>
                        <p>Перезвноню через 30 сек!  </p>
                        <button className={" _button"}>отправить</button>
                    </li>
                </ul>
            </form>
        </div>


        </section>
    )
}


