
import {Link} from "react-router-dom"


const City = ({city})=>{
    return (
        <>
            <Link to={`/itineraries/${(city._id)}`}>
                    <div className="cajaCiudad" style= {{
                        backgroundImage:`url(${city.src})`
                    }}>
                        <p>{city.name}</p>
                    </div>
            </Link>    
        </>
    )
}
export default City