import {useState, useEffect} from "react"
import Activity from './Activities'
import { connect } from "react-redux"
import itinerariesActions from "../redux/actions/itinerariesActions"
import Comment from './Comment'
import Swal from 'sweetalert2'

const Itinerary =(props)=> {
  const [visible, setVisible] = useState(false)
  const [comment, setComment] = useState('')
  const [liked, setLiked] = useState('')

  useEffect(()=> {
    if(props.loggedUser){
      setLiked(props.loggedUser.response.id)
    }
  },[])

  const sendComment = async () => {
    if(comment===""){
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: "You can't send an empty comment",
        showConfirmButton: false,
        timer: 1500
      })
      return false
    }
    await props.addComment(comment, props.loggedUser.response.token, props.itinerary._id)
    setComment('')
  }

  const addLike =()=> {
    props.like(props.itinerary._id, props.loggedUser.response.token)
  }
  const dislike =()=> {
     props.dislike(props.itinerary._id, props.loggedUser.response.token)
  }

    return (
        <>
         <div className="cadaItinerary" >
           <div className="cajaItinerary1">
                <div className = "userItinerary">
                    <div className = "userImg" style={{
                      backgroundImage:`url(${props.itinerary.userImg})`
                    }}></div>
                    <p className="userName">{props.itinerary.userName}</p>
                </div>
                
                <div className = "bodyItinerary">
                    <p className="titulito">{(props.itinerary.tittle).toUpperCase()}</p>
                    <div className = "parrafosItinerary">
                    <p className="likes">
                      {props.itinerary.likes.includes(liked) 
                      ?<i className="fa fa-heart corazon" style={{cursor: 'pointer'}} onClick={props.loggedUser && dislike}></i>
                      :<i className="fa fa-heart corazon" style={{cursor: 'pointer'}} onClick={props.loggedUser ? addLike : ()=> Swal.fire({
                        position: 'top',
                        icon: 'warning',
                        title: 'You have to be logged to like it',
                        showConfirmButton: false,
                        timer: 1500
                      })} ></i>}{props.itinerary.likes.length}</p>
                      {/* <p className="likes"><i className="fa fa-heart corazon"></i>{props.itinerary.likes}</p> */}
                      <p className="duracion">Duration: {props.itinerary.hours}h</p>
                      <p>{Array(props.itinerary.price).fill(<i className="fa fa-money-bill-alt billete"></i>)}</p>
                    </div>
                    <div className="cajaHashtags">
                    {props.itinerary.hashtags.map((item,index)=><p key={index + props.itinerary.tittle} className="hashtag">{item}</p>)}
                    </div>
                </div>
           </div>
           <div>
                  {visible && (
                    <div className="btnContent">
                    <div className="activities">
                      {props.itinerary.activities.map(activity => {
                        return <Activity key={activity.title} activity={activity}/>
                      })}
                    </div>
                    <h4>Leave a comment!</h4>
                    <div className="comments">
                      {props.itinerary.comments.map(comment => {
                        return <Comment key={comment._id} comment={comment} id={props.itinerary._id} cityId={props.id}/>})}
                      <div className="inputDiv">
                        <input type="text" id="inputComment" className="inputComment" placeholder={!props.loggedUser ? "You need to be logged to comment!" : "Leave your comment"} value={comment}disabled={!props.loggedUser && true}onChange={(e)=>setComment(e.target.value)}/>
                        <i className="fas fa-paper-plane enter" style={{cursor: 'pointer'}} id={props.itinerary._id} onClick={props.loggedUser ? sendComment :()=>Swal.fire({
                        position: 'top',
                        icon: 'warning',
                        title: 'You must be logged to send a comment',
                        showConfirmButton: false,
                        timer: 1500
                      })}></i>
                      </div>
                      </div>
                    </div>
                  )}
                 <button className="btn btn-secondary botonItinerary" onClick={()=> setVisible(!visible)}>{!visible ? 'View All' : 'View Less'}</button>
           </div>
         </div>
        </>
    )
}
const mapStateToProps = state => {
  return {
    loggedUser: state.authR.loggedUser,
    itineraries: state.itinerariesR.itineraries
  }
}


const mapDispatchToProps = {
  addComment: itinerariesActions.addComment,
  like: itinerariesActions.like,
  dislike: itinerariesActions.dislike
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)

