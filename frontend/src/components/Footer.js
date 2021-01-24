import {Link} from "react-router-dom"
const Footer = ()=>{
    return (
          <footer style = {{
              backgroundImage: "url('./assets/croacia.jpg')"
          }}>
              <div className="cajaFooter">
                  <div>Copyright © 2021 Mauricio Alcalde. All Rights Reserved</div>
                  <div>
                      <Link to="/"><p className="textoFooter">Home</p></Link>
                      <Link to="/cities"><p className="textoFooter">Cities</p></Link>
                  </div>
              </div>
           </footer>
    )
}
export default Footer