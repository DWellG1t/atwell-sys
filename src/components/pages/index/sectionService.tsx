/* eslint-disable react/jsx-key */
import { BsFillRouterFill } from "react-icons/bs";
import styles from "./sectionService.module.scss";

import { setActive } from "@/store/popupSlice";
import { useDispatch } from "react-redux";



export default function SectionService(props: any) {
    
    const dispatch = useDispatch(); 

    return (
        <>
            <section className={styles.sectionService} style={ props.backgroundColor == "white" ? {backgroundColor: "white"} : {}}>
                <div className={styles.sectionService__container + " _container"}>
                    {/* Карточка */}
                    {[
                        // eslint-disable-next-line react/jsx-key
                        ["Настройка роутера", <BsFillRouterFill />],
                        ["Настройка роутера", <BsFillRouterFill />],
                        ["Настройка роутера", <BsFillRouterFill />],
                        ["Настройка роутера", <BsFillRouterFill />],
                        ["Настройка роутера", <BsFillRouterFill />],
                        ["Настройка роутера", <BsFillRouterFill />],
                        ["Настройка роутера", <BsFillRouterFill />],

                    ].map((el, ind) => (
                        <div key={ind} className={styles.sectionService__card} onClick={() => { dispatch(setActive(''))} }>
                        <h1>{el[0]}</h1>
                        <div>
                            {el[1]}
                        </div>
                    </div>
                    ))

                    }


                </div>
            </section>
        </>

    )
}