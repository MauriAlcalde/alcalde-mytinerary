import {Link} from "react-router-dom"
import {Spinner} from 'reactstrap' //
import fotito from "../assets/volver2.jpg"
import {useEffect, useState} from "react"
import Itinerary from "./Itinerary"
import {connect} from "react-redux"
import itinerariesActions from "../redux/actions/itinerariesActions"
import cityActions from "../redux/actions/citiesActions"

const Itineraries=(props)=>{
    const id = props.match.params.id //ID DE LA URL
    const [itinerary, setItinerary]= useState({})

    useEffect(()=>{
      if(props.city.length === 0){
      props.history.push("/cities")//LO REDIRECCIONO A CITIES PARA QUE NO ME SALTE ERROR AL HACER REFRESH(LO VOY A CAMBIAR POR UNA FUNCION)
      window.scrollTo(0,0)}
      
      let city = props.city.filter(city => city._id === id)//FILTRO LA CIUDAD POR EL ID
      setItinerary(city[0])//MODIFICO EL STATE PROPIO CON LA CIUDAD QUE FILTRE ARRIBA
      props.getItineraries(id)//PASO EL ID COMO PARAMETRO PARA QUE ME DEVUELVA LOS ITINERARIOS DE LA CIUDAD CORRESPONDIENTE 
      window.scrollTo(0,0)
    },[])//ANTES RECIBIA EL ID DE LA LINEA 11 COMO DEPENDENCIA PENSANDO QUE TENIA QUE CAMBIAR DE ACUERDO AL ID DE LA URL
  
   
    function retornaItineraries () {
      if (props.itineraries.length === 0){
        return (
          <>
           <div className="itinerary" style= {{
                    backgroundImage:`url("../assets/imagenGeneral2.jpg")`
                      }}>
                    <p className="notItinerary">Oops! We don't have itineraries yet. Make one!</p>
          </div>
          </>//SI NO HAY ITINERARIOS
      )
      }else {
        return (
          <>
          {props.itineraries.map(itinerary =><Itinerary key={itinerary._id} itinerary={itinerary}/>)}
          </>
        )
      }
    }

    return (
      <>
        <div className="cajaItineraries">
          <div className="cajaItinerarie" style= {{
                          backgroundImage:`url(${itinerary.src})`
                      }}>
                          <p>{itinerary.name}</p>
          </div>
          {retornaItineraries()}
          <div className="cajaItinerary">
            <Link to="/cities">
              <div className="cajaBack">
                      <div className="cajaImagen">
                        <img src={fotito} style={{
                          width: '35vw',                          
                        }} alt="foto" />  
                      </div>
                      <p className="backToCities">Looking for other city? Click Here!</p>
              </div>
            </Link>
          </div>
        </div>
      </>
    )
}
/* MANDO LAS CIUDADES (NO LAS FILTRADAS) Y LOS ITINERARIOS DE ESA CIUDAD A LAS PROPS */
const mapStateToProps = state =>{
  return {
    city: state.citiesR.cities,
    itineraries: state.itinerariesR.itineraries
  }
}
/* MANDO LAS ACTIONS A LAS PROPS PARA QUE EL COMPONENTE PUEDA DESPACHARLAS */
const mapDispatchToProps = {
  getItineraries: itinerariesActions.getItineraries,
  getCities: cityActions.getCities, //lo iba a usar para solucionar el error del refresh pero no me funciono
}
export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)