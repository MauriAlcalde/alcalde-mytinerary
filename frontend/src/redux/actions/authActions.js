import axios from 'axios'
import Swal from 'sweetalert2'

const authActions = {
  createUser: (newUser)=> {
    return async (dispatch, getState) => {
      const response = await axios.post('http://localhost:4000/api/signup', newUser)
      if(!response.data.success){
        return response.data
      }
      console.log (response.data)
      dispatch({type: 'LOG_USER', payload: response.data})
    }
  },
  signIn: (user) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post('http://localhost:4000/api/signin', user)
        if(!response.data.success){
          return response.data
        }
        dispatch({type: 'LOG_USER', payload: response.data})
      }catch(err){
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

  signInFromLS: (token) => {
      return async (dispatch, getState) => {
        try{
          const response = await axios.post('http://localhost:4000/api/signin/ls', {token}, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          dispatch({type: 'LOG_USER', payload: {response: {...response.data.response}}})
        }catch(err){
          // Evalua el estado del error 401 (unauthorized)
          if(err.response.status === 401) {
            Swal.fire({
              position: 'top',
              icon: 'error',
              title: "You are not allowed to access this page",
              showConfirmButton: false,
              timer: 1500
            })
            localStorage.clear()
            return true
          }
        }
      }
  },

  signOut: () => {
    return (dispatch, getState) => {
      dispatch({type: 'LOG_OUT'}) 
    }
  },
}
export default authActions
/* REVISAR NOMBRES DE PROPIEDADES DEL OBJETO */