import Header from "./templates/header";
import Footer from "./templates/footer";
import SD from "./templates/SD";
import Contact from "./templates/contact";

// Основной Layout
export default function Layout({ children }: any) {
    return (
    <>
        <Header />
        <main className='main'>
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

