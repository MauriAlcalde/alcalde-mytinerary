import {useState, useEffect} from "react"
import City from "./City"
import {Spinner} from 'reactstrap'
import {Link} from "react-router-dom"
import fotito from "../assets/imagenAvion2.jpg"
import {connect} from "react-redux"
import cityActions from "../redux/actions/citiesActions"

    const Cities = (props) =>{
      
    useEffect(()=>{
      props.getCities()
      window.scrollTo(0,0)
    },[])  


    function retornaCiudades (){
      if (props.cities.length === 0) {
        return (
          <>
            <div className="cajaSpinner">
              <div className="cajitaSpinner">
                <Spinner  className="spinner"/>
              </div>
            </div>
          </>
        )
      }
      if (props.oneCity.length===0){
        return(
          <>      
               <div className="cajaCiudad" style= {{
                  backgroundImage:`url("./assets/imagenGeneral2.jpg")`
                    }}>
                  <p className="notFound">Oops! We don't have itineraries for this place. Try other!</p>
               </div>
          </>
        )
      }
      else {
        return(
          <>
           {props.oneCity.map(ciudad=><City key={ciudad.name} city={ciudad}/>)}
          </>
        )
      }
    }
 
    return(
        <>
            <div className="cajaCities">
                <p className="tituloCities">Cities</p>
                <input type="text" placeholder="Type here for search" onChange={(e)=>props.filterCities(e.target.value.trim())}></input>
                {retornaCiudades()}
                <Link to="/">
                   <div className="cajaHome">
                      <div className="cajaImagen">
                        <img src={fotito} style={{
                          width: '35vw',
                        }} alt="foto" />  
                      </div>
                      <p className="backToHome">Back to Home</p>
                    </div>
              </Link>
            </div>
        </>
    )
}

const mapStateToProps = state =>{
  console.log(state)
    return {
      cities: state.citiesR.cities,
      oneCity: state.citiesR.citiesFiltradas
    }
}
const mapDispatchToProps = {
  getCities: cityActions.getCities,
  filterCities: cityActions.filterCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)