import Header from "./templates/header";
import Footer from "./templates/footer";
import Subfooter from "./templates/subfooter";
import PopupOrder from "./templates/popupOrder";
import MobileMenu from "./templates/mobileMenu";

import { useDispatch } from "react-redux";
import { setActive } from "@/store/popupSlice";



// Основной Layout
export default function Layout({ children }: any) {
    const dispatch = useDispatch();

    return (
    <>
        <Header  />
        <MobileMenu />
        <main className='main'> 
            <div className="_wrapper">
                { children }
            </div>
        </main>
        <Footer />
        <Subfooter/>

        <PopupOrder/>
    </>
    )
}

