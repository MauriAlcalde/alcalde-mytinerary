import {useState, useEffect} from "react"
import City from "./City"
import {Spinner} from 'reactstrap'
import {Link} from "react-router-dom"
import fotito from "../assets/imagenAvion2.jpg"
import {connect} from "react-redux"
import cityActions from "../redux/actions/citiesActions"

    const Cities = (props) =>{
      /* CUANDO SE MONTA EL COMPONENTE DESPACHO LA ACTION QUE FETCHEA LAS CIUDADES */
    useEffect(()=>{
      props.getCities()
      window.scrollTo(0,0)
    },[])  

    /* FUNCION QUE GENERA LAS CIUDADES */
    function retornaCiudades (){
      if (props.cities.length === 0) {//CUANDO ARRANCA LA APP EL STATE CITIES (CENTRAL) ESTA VACIO, MIENTRAS HACE EL PEDIDO A LA BASE DE DATOS MUESTRA EL PRELOADER, CUANDO CARGA MUESTRA LAS CIUDADES
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
      if (props.oneCity.length===0){//STATE DE LAS CIUDADES FILTRADAS, AL PRINCIPIO MUESTRA TODAS, A MEDIDA QUE SE MODIFICA EL INPUT VA MOSTRANDO DE ACUERDO AL VALUE DEL INPUT, SI ESTA VACIO MUESTRA EL CARTEL
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
      else {//SI NO ESTA VACIO MAPEO Y MUESTRO LAS CIUDADES QUE CORRESPONDEN
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
                <input type="text" placeholder="Type here for search" onChange={(e)=>props.filterCities(e.target.value.trim())}></input>{/* PASO COMO PARAMETRO EL VALUE DEL INPUT */}
                {retornaCiudades()}{/* LLAMO A LA FUNCION DE ARRIBA */}
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
    return {//ESTADO CENTRAL
      cities: state.citiesR.cities,
      oneCity: state.citiesR.citiesFiltradas
    }
}
const mapDispatchToProps = {//ACTIONS
  getCities: cityActions.getCities,
  filterCities: cityActions.filterCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)
/* REVISAR CONCEPTO DE CONNECT Y QUE HACE */