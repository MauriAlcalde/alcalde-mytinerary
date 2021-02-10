import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles.css"
import Header from "./components/Header"
import Home from "./components/Section"
import Cities from "./components/Cities";
import Itineraries from "./components/Itineraries";
import Footer from "./components/Footer"
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import {connect} from 'react-redux'
import authActions from './redux/actions/authActions'
import { useState } from 'react'

function App(props) {
  const [reload, setReload] = useState(false)
  if(props.loggedUser){
    var routes =
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cities" component={Cities}/>
        <Route path="/itineraries/:id" component={Itineraries}/>
        <Route path="/signUp" component={SignUp}/>
        <Route path="/login" component={SignIn}/>
        <Redirect to="/"/>
      </Switch>
    </>
  }else if(localStorage.getItem('token')){
    props.signInFromLS(localStorage.getItem('token'))
    .then(response=> {
     response && setReload(!reload)
    })
  }else {
   var routes=
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cities" component={Cities}/>
        <Route path="/itineraries/:id" component={Itineraries}/>
        <Route path="/signUp" component={SignUp}/>
        <Route path="/login" component={SignIn}/>
        <Redirect to="/"/>
      </Switch>
    </>
  }
  return (
   <> 
   <Router>
      <Header/>
      <Switch>
      {routes}
      </Switch>
       <Footer/>
   </Router>
   </> 
  );
}
const mapStateToProps = state =>{
  return {
    loggedUser: state.authR.loggedUser
  }
}

const mapDispatchToProps = {
  signInFromLS: authActions.signInFromLS,
  /* addComment: commentActions.addComment */
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
