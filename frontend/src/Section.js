import PrimerDiv from "./PrimerDivSection"
import SegundoDiv from "./SegundoDivSection"
import Example from "./TercerDivSection"
function Section(){
    return (
        <div class="contenedorGeneral">
            <PrimerDiv/>
            <SegundoDiv/>
            <div className="container-fluid carrusel"><Example/></div>
            
        </div>
    )
}
export default Section;