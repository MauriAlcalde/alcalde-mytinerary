import {Link} from "react-router-dom"
import fotito from "../assets/volver2.jpg"
import {useEffect, useState} from "react"
import Itinerary from "./Itinerary"
import {connect} from "react-redux"
import itinerariesActions from "../redux/actions/itinerariesActions"
const Itineraries=(props)=>{

    const [itinerary, setItinerary]= useState({})
    const id = props.match.params.id
    useEffect(()=>{
      var city = props.city.filter(city => city._id === id)
      setItinerary(city[0])
      props.getItineraries(id)
      window.scrollTo(0,0)
    },[id])

    function retornaItineraries () {
      if (props.itineraries.length === 0){
        return (
          <>
           <div className="itinerary" style= {{
                    backgroundImage:`url("../assets/imagenGeneral2.jpg")`
                      }}>
                    <p className="notItinerary">Oops! We don't have itineraries yet. Make one!</p>
          </div>
          </>
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
                          /* marginRight: '10vw' */
                          
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
const mapStateToProps = state =>{
  return {
    city: state.citiesR.cities,
    itineraries: state.itinerariesR.itineraries
  }
}
const mapDispatchToProps = {
  getItineraries: itinerariesActions.getItineraries
}
export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)