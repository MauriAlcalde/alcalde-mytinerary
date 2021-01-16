import PrimerDiv from "./PrimerDivSection"
import Nav from "./Nav"
function Header (){
    return (
       <> 
         <header class ="container-fluid cajitaHeader">
            {/* <div class="avatar"></div> */}
            <div className="primero"></div>
            <div class="conteiner cajaDerecha">
               <Nav className="prueba"/>
               <div class="avatar"></div>
            </div>
         </header>
       </> 
    )
}
export default Header;