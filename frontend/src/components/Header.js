/* import PrimerDiv from "./PrimerDivSection" */
import Nav from "./Nav"
function Header (){
    return (
       <> 
         <header className ="container-fluid cajitaHeader">
            {/* <div class="avatar"></div> */}
            <div className="primero"></div>
            <div className="conteiner cajaDerecha">
               <Nav className="prueba"/>
               <div className="avatar"></div>
            </div>
         </header>
       </> 
    )
}
export default Header;