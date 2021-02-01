import {useState} from "react"
const Itinerary =({itinerary})=> {
  const [visible, setVisible] = useState(false)
 
    return (
        <>
         <div className="cadaItinerary" >
                  <div className = "userItinerary">
                    <div className = "userImg" style={{
                      backgroundImage:`url(${itinerary.userImg})`
                    }}></div>
                    <p className="userName">{itinerary.userName}</p>
                  </div>
                  <div className = "bodyItinerary">
                    <p className="titulito">{(itinerary.tittle).toUpperCase()}</p>
                    <div className = "parrafosItinerary">
                      <p className="likes"><i className="fa fa-heart corazon"></i>{itinerary.likes}</p>
                      <p className="duracion">Duration: {itinerary.hours}h</p>
                      <p>{Array(itinerary.price).fill(<i className="fa fa-money-bill-alt billete"></i>)}</p>
                    </div>
                    <div className="cajaHashtags">
                    {itinerary.hashtags.map((item,index)=><p key={index + itinerary.tittle} className="hashtag">{item}</p>)}
                    </div>
                    <button className="btn btn-secondary botonItinerary" onClick={()=> setVisible(!visible)}>{!visible ? 'View All' : 'View Less'}</button>
                  {visible && (
                    <h1>Activities and Comments coming soon</h1>
                  )}
                  </div>
                  <div className = "activities"></div>
        </div>
        </>
    )
}
export default Itinerary