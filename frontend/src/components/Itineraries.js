import {Link} from "react-router-dom"
import fotito from "../assets/volver2.jpg"
import {useEffect, useState} from "react"
import Itinerary from "./Itinerary"
const Itineraries=(props)=>{

    const [itinerary, setItinerary]= useState({})

    useEffect(()=>{
      const id = props.match.params.id
      fetch(`http://localhost:4000/api/city/${id}`)
      .then(response => response.json())
      .then(data => setItinerary(data.response))
      window.scrollTo(0,0)
    },[])

    return (
      <>
        <div className="cajaItineraries">
          <div className="cajaItinerarie" style= {{
                          backgroundImage:`url(${itinerary.src})`
                      }}>
                          <p>{itinerary.name}</p>
          </div>
          <Itinerary/>
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
export default Itineraries