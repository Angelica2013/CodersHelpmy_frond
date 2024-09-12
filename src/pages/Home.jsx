import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Carrousel from "../components/carrousel/Carrousel";
import About from "../components/about/About"

const Home = () => {
    return (
    <>
        <Navbar/>
        <About/>
        <Carrousel/>
        <Footer/>
    </>
    )
}

export default Home;