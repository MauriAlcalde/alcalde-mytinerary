import PrimerDiv from "./PrimerDivSection"
import Nav from "./Nav"
function Header (){
    return (
       <> 
         <header class ="cajitaHeader">
            <div class="avatar"></div>
            <PrimerDiv/>
            <div class="menu"><Nav/></div>
         </header>
       </>
    )
}
export default Header;