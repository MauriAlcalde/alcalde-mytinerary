import {useState, useEffect} from "react"
import Ciudad from "./Ciudad"

    const Ciudades =()=>{
    const[imputValue, setImputValue]= useState("")
    const[ciudades, setCiudades]= useState([])
    const[ciudadesMostradas, setCiudadesMostradas]=useState([])
 
    useEffect(()=>{
      fetch("http://localhost:4000/api/cities")
      .then(response => response.json())
      .then(data =>{
        setCiudades(data.response)
        setCiudadesMostradas(data.response)
      })
    },[])  

    useEffect(()=>{
      setCiudadesMostradas(ciudades.filter(ciudad=>ciudad.name.toUpperCase().indexOf(imputValue.toUpperCase())===0))
    }, [imputValue])

    function retornaCiudades (){
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
           {ciudadesMostradas.map(ciudad=><Ciudad key={ciudad.name} city={ciudad}/>)}
          </>
        )
      }
    }

    return(
        <>
            <div className="cajaCities">
                <input type="text" placeholder="Type here for search" onChange={(e)=>setImputValue(e.target.value.trim())}></input>
                {retornaCiudades()}
            </div>
        </>
    )
}
export default Ciudades