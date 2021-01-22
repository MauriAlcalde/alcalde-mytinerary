import {Link} from "react-router-dom"
import {useEffect, useState} from "react"
const Itineraries=(props)=>{

    const [itinerary, setItinerary]= useState({})

    useEffect(()=>{
      const id = props.match.params.id
      fetch(`http://localhost:4000/api/city/${id}`)
      .then(response => response.json())
      .then(data => setItinerary(data.response))
    },[])

    return (
      <>
        <div className="cajaCities">
          <div className="cajaCiudad" style= {{
                          backgroundImage:`url(${itinerary.src})`
                      }}>
                          <p>{itinerary.name}</p>
                      </div>
          <Link to="/cities"><button>back to Cities</button></Link>
        </div>
      </>
    )
}
export default Itineraries