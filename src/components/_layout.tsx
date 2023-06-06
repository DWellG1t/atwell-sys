import Header from "./templates/header";
import Footer from "./templates/footer";

import { useDispatch } from "react-redux";
import { setActive } from "@/store/popupSlice";



// Основной Layout
export default function Layout({ children }: any) {
    const dispatch = useDispatch();
    
    return (
    <>
        <Header  />
            <main className='main'> 
                <div className="_wrapper">
                    { children }
                </div>
            </main>
        <Footer />

    </>
    )
}

