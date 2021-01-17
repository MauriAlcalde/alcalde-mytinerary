import PrimerDiv from "./PrimerDivSection"
import SegundoDiv from "./SegundoDivSection"
import Example from "./TercerDivSection"
import Frases from "./Frases"
function Home(){
    return (
        <div className="contenedorGeneral">
            <PrimerDiv/>
            <Frases />
            <SegundoDiv/>
            <div className="tituloCarrusel"><p>Popular Mytineraries</p></div>
            <div className="container-fluid carrusel"><Example/></div>
            
        </div>
    )
}
export default Home;