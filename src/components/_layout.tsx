import Header from "./templates/header";
import Footer from "./templates/footer";
import SD from "./templates/SD";
import Contact from "./templates/contact";
import ContactPopup from "./templates/contactPopup";

import { useDispatch } from "react-redux";
import { setActive } from "@/store/popupSlice";

// Основной Layout
export default function Layout({ children }: any) {
    const dispatch = useDispatch();
    
    return (
    <>
        <Header  />
        <ContactPopup />
        <main className='main' onKeyDown={ event => {  if(event.code == "Escape") { dispatch(setActive("false"))}}}> 
        <div className="_wrapper">
            { children }
        </div>
        </main>
        <Contact />
        <Footer />
        <SD />
    </>
    )
}

