import axios from 'axios'
import Swal from 'sweetalert2'

const itinerariesActions = {
  /* HAGO EL PEDIDO A LA API RECIBIENDO EL ID DE LA CIUDAD COMO PARAMETRO Y CONCATENANDOLO AL FINAL PARA QUE DEPENDIENDO DE LA CIUDAD QUE SEA ME DEVUELVA LOS ITINERARIOS DE ESA CIUDAD */
  getItineraries: (id) => {
    return async (dispatch, getState) => {
      try {
        const response = await fetch('http://localhost:4000/api/itineraries/'+id)
        const data = await response.json()
        dispatch({type: 'GET_ITINERARIES', payload: data.response})
      }catch(error){
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: 'Oops something went wrong, try again later!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  },
  
  addComment: (comment, token, id) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post('http://localhost:4000/api/comments', {comment, token, id} , {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch({type: 'COMMENT', payload: response.data})
        return true
      }catch(error){
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: 'Oops something went wrong, try again later!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  },

  updateComment: (comment, idComment, idItinerary, token) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.put('http://localhost:4000/api/comments/update', {comment, idComment, idItinerary, token}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch({type: 'COMMENT', payload: response.data})
      }
      catch(error){
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: 'Oops something went wrong, try again later!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  },

  deleteComment: (idComment, idItinerary, token) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.put('http://localhost:4000/api/comments', {idComment, idItinerary, token}, {
          headers: {
            Authorization: 'Bearer '+ token
          }
        })
        dispatch({type: 'COMMENT', payload: response.data})
      }
      catch(error){
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: 'Oops something went wrong, try again later!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  },

  like: (id, token) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post('http://localhost:4000/api/likes', {id, token}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
          
        })
        console.log(response.data.response)
        dispatch({type: 'LIKE', payload: response.data})
      }catch(error){
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: 'Oops something went wrong, try again later!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  },

  dislike: (id, token) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post('http://localhost:4000/api/dislike', {token, id}, {
          headers: {
            Authorization: 'Bearer ' +token
          }
        })
        console.log(response)
        dispatch({type: 'LIKE', payload: response.data})
      }catch(error){
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: 'Oops something went wrong, try again later!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  }
}
  
  export default itinerariesActions