import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles.css"
import Header from "./components/Header"
import Home from "./components/Section"
import Ciudades from "./components/Cities";
/* import Footer from "./components/Footer" */
function App() {
  return (
   <> 
   <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cities" component={Ciudades}/>
      </Switch>
   </Router>
    {/* <Footer/> */}
   </> 
  );
}

export default App;
