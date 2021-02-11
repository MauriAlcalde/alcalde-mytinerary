import { connect } from "react-redux"
import itinerariesActions from "../redux/actions/itinerariesActions"
import { useState, useEffect } from "react"

const Comment =(props)=> {
    const {userName, comment} = props.comment
    const [visible, setVisible] = useState(false)
    const [updatedComment, setUpdatedComment] = useState('')
    const [loggedUser, setLoggedUser] = useState('')

    const edit =()=> {
        setVisible(!visible)  
        setUpdatedComment(comment)
      }

    const updateComment= async () => {
      await props.updateComment(updatedComment, props.comment._id, props.id, props.loggedUser.response.token)
      setVisible(!visible)
    }
    
    const deleteComment =async()=>{
      await props.deleteComment(props.comment._id, props.id, props.loggedUser.response.token)
    }
    useEffect(() => {
      if(props.loggedUser){
         setLoggedUser(props.loggedUser.response.userName)
      }
    }, [])

    return (
        <div className="comment">
          <div className="commentContent">
            <h5>{userName}:</h5>
            {visible ?
            <>
            <input type="text" className="inputModif" onChange={(e)=>setUpdatedComment(e.target.value)} value={updatedComment} 
            style={{borderRadius: '30px', border: 'none', outline: 'none', textAlign: 'center'}}/>
            <div className="iconosModif">
              <i class="fas fa-paper-plane iconitosModif" style={{cursor: 'pointer', marginLeft: '0.5rem'}} onClick={updateComment}></i>
              <i class="fas fa-ban iconitosModif" style={{cursor: 'pointer', marginLeft: '0.5rem'}} onClick={()=>setVisible(!visible)}></i>
            </div>
            </>
            : <div className="pComment">
            <p>{comment}</p>
            {loggedUser === props.comment.userName && 
            <div>
            <i class="fas fa-edit iconitosComment"  style={{marginRight: '0.4rem', cursor: 'pointer'}} onClick={edit}></i>
            <i class="fas fa-trash-alt iconitosComment" style={{cursor: 'pointer'}} onClick={deleteComment}></i>
            </div>
            }
          </div>
          }
    
          </div>
        </div>
      )
    }


const mapStateToProps = state => {
    return {
        loggedUser: state.authR.loggedUser
    }
}
      
const mapDispatchToProps = {
    deleteComment: itinerariesActions.deleteComment,
    getItineraries: itinerariesActions.getItineraries,
    updateComment: itinerariesActions.updateComment
}
      
export default connect(mapStateToProps, mapDispatchToProps)(Comment)