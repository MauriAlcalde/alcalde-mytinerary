import PrimerDiv from "./PrimerDivSection"
import SegundoDiv from "./SegundoDivSection"
import Example from "./TercerDivSection"
import Frases from "./Frases"
function Home(){
    return (
        <div class="contenedorGeneral">
            <PrimerDiv/>
            <Frases />
            <SegundoDiv/>
            <div className="tituloCarrusel"><h2>Popular Mytineraries</h2></div>
            <div className="container-fluid carrusel"><Example/></div>
            
        </div>
    )
}
export default Home;