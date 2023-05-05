import styles from "./sectionBlogCatalog.module.scss"
import { IPost } from "./types"
import { BsEyeFill } from "react-icons/bs";

export default function SectionBlogCatalog() {
    return (
        <>
            <section className={styles.sectionBlogCatalog + " _section"}>
                <div className={styles.sectionBlogCatalog__container + " _container"}>
                    {[
                        {title: "SAP настройка", desc: "Я недавно собрал сервер для SAP", imgURL: "https://www.kultoboz.ru/sites/default/files/images/reviews/architecture/opera_house.jpg", date: "19.11.2001", views: 9, id: 10},
                        {title: "SAP настройка", desc: "Я недавно собрал сервер для SAP", imgURL: "https://www.kultoboz.ru/sites/default/files/images/reviews/architecture/opera_house.jpg", date: "19.11.2001", views: 9, id: 10},
                        {title: "SAP настройка", desc: "Я недавно собрал сервер для SAP", imgURL: "https://www.kultoboz.ru/sites/default/files/images/reviews/architecture/opera_house.jpg", date: "19.11.2001", views: 9, id: 10},

                    ].map((el: IPost, ind) => {
                        return (
                            <div key={ind} className={styles.sectionBlogCatalog__card}>
                                <div className={styles.sectionBlogCatalog__img + " _ibg"}>
                                    <img src={el.imgURL} alt="" />
                                </div>
                                <p>{el.date} <BsEyeFill /> {el.views}</p>
                                <h1>{el.title}</h1>
                                <p>{el.desc.slice(0, 31)}...</p>
                                {/* <button className="_button">read</button> */}

                            </div>
                            
                        )
                    })}
                </div>
            </section>
        </>
    )
}