import styles from "@/styles/templates/contact.module.scss";
import { FaHeadphonesAlt, FaPhoneAlt } from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import Link from "next/dist/client/link";

export default function Contact() {
    return (
    <nav className={styles.contact}>
        <ul>
            {/* <li><Link href="/blog"><GrMail /></Link></li> */}
            <li><a href="tel:+79775918292"><FaPhoneAlt /></a></li>
            {/* <li><FaHeadphonesAlt /></li> */}
        </ul>
    </nav>
    )
}