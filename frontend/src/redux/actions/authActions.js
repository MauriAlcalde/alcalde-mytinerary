import axios from 'axios'


const authActions = {
  createUser: (newUser)=> {
    return async (dispatch, getState) => {
      const response = await axios.post('http://localhost:4000/api/signup', newUser)

      if(!response.data.success){
        return response.data
      }
      dispatch({type: 'LOG_USER', payload: response.data})
    }
  },
  logIn: (user) => {
    return async (dispatch, getState) => {
      const response = await axios.post('http://localhost:4000/api/signin', user)

      if(!response.data.success && response){

        return response.data
      }
      console.log(response)
      dispatch({type: 'LOG_USER', payload: response.data})
      
    }
  },

  logInFromLS: (token) => {
    return async (dispatch, getState) => {
      try{
        const response = await axios.post('http://localhost:4000/api/signin/ls', {token}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch({type: 'LOG_USER', payload: {response: {...response.data.response}}})
      }catch(err){
        if(err.response.status === 401) {
          alert('Que tamo haciendo pa?')
          localStorage.clear()
          return true
        }
      }
    }
  },

  logOut: () => {
    return (dispatch, getState) => {
      dispatch({type: 'LOG_OUT'}) 
    }
  },
}
export default authActions
/* REVISAR NOMBRES DE PROPIEDADES DEL OBJETO */