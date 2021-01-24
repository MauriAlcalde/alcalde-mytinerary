import {useState, useEffect} from "react"
import City from "./City"
import {Spinner} from 'reactstrap'
import {Link} from "react-router-dom"
import fotito from "../assets/imagenAvion2.jpg"
import axios from 'axios'

    const Cities =()=>{
    const[imputValue, setImputValue]= useState("")
    const[ciudades, setCiudades]= useState([])
    const[ciudadesMostradas, setCiudadesMostradas]=useState([])
    const[loaded, setLoaded]=useState(false)

    const fetchearData = async () =>{
      try {
        const data = await axios
        .get("http://localhost:4000/api/cities")
        .then(res=> {setCiudades(res.data.response) 
              setCiudadesMostradas(res.data.response)})
              setLoaded(true)
      } catch (e) {
        console.log(e)
      }
    }
 
    useEffect(()=>{
      fetchearData()
      window.scrollTo(0,0)
    },[])  

    useEffect(()=>{
      setCiudadesMostradas(ciudades.filter(ciudad=>ciudad.name.toUpperCase().indexOf(imputValue.toUpperCase())===0))
    }, [imputValue])

    function retornaCiudades (){
      if (loaded === false) {
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
      if (ciudadesMostradas.length===0){
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
           {ciudadesMostradas.map(ciudad=><City key={ciudad.name} city={ciudad}/>)}
          </>
        )
      }
    }

    return(
        <>
            <div className="cajaCities">
                <p className="tituloCities">Cities</p>
                <input type="text" placeholder="Type here for search" onChange={(e)=>setImputValue(e.target.value.trim())}></input>
                {retornaCiudades()}
                <Link to="/">
                   <div className="cajaHome">
                      <div className="cajaImagen">
                        <img src={fotito} style={{
                          width: '35vw',
                          /* marginRight: '10vw' */
                          
                        }} alt="foto" />  
                      </div>
                      <p className="backToHome">Back to Home</p>
                    </div>
              </Link>
            </div>
        </>
    )
}
export default Cities