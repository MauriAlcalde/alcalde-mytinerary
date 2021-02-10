const initialState = {
    loggedUser: null,
    userName: []
  }
  
  
  const authReducer =(state = initialState, action) => {
    switch(action.type){
      case 'LOG_USER':
        localStorage.setItem('token', action.payload.response.token)
        localStorage.setItem('name', action.payload.response.name)
        localStorage.setItem('image', action.payload.response.pic)
        return {
          ...state,
          loggedUser: action.payload,
          userName: action.payload.response.name
        }
      case 'LOG_OUT':
        localStorage.clear()
        return {
          ...state,
          loggedUser: null
        }
      default:
        return state    
    }
  }
  
  export default authReducer
  /* CUIDADO CON LOS NOMBRES (LOGGEDUSER) */