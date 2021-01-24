import FirstDiv from "./FirstSection"
import SecondDiv from "./SecondSection"
import Example from "./Carousel"
import Frases from "./Frases"
function Home(){
    window.scrollTo(0,0)
    return (
        <div className="contenedorGeneral">
            <FirstDiv/>
            <Frases />
            <SecondDiv/>
            <div className="tituloCarrusel"><p>Popular Mytineraries</p></div>
            <div className="container-fluid carrusel"><Example/></div> 
        </div>
    )
}
export default Home;