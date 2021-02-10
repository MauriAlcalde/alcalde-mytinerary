import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions';
import Nav from "./Nav"
function Header (props){
   if (props.loggedUser){
      var userImage = props.loggedUser.response.pic
   }else{
      var userImage = "../assets/icono2.png"
   }
   console.log(props.loggedUser)
    return (
       <> 
         <header className ="container-fluid cajitaHeader">
            {/* <div class="avatar"></div> */}
            <div className="primero"></div>
            <div className="conteiner cajaDerecha">
               <Nav className="prueba"/>
               <div className="avatar" style={{backgroundImage:` url(${userImage})`}}></div>
            </div>
         </header>
       </> 
    )
}
const mapStateToProps= state =>{
   return {
     loggedUser: state.authR.loggedUser
   }
 }


export default connect(mapStateToProps)(Header)