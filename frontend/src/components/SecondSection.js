import {Link} from "react-router-dom"
function SecondDiv(){
    return (
        <div className="segundo">
            <div className="cajaimgGrande">
                <div className="cajaimagen">
                    <h2>Find your perfect trip, designed by insiders who know and love their cities</h2>
                    <Link to="/cities"><button type="button" class="btn btn-outline-danger discover">Discover</button></Link>
                </div>
            </div>
        </div> 
    )
}
export default SecondDiv; 