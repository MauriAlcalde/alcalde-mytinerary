const initialState = {
    itineraries: []
  }
  
  const itineraryReducer = (state = initialState, action) => {
    switch(action.type){
      /* RELLENO EL ARRAY CON LOS ITINERARIOS DE LA CIUDAD CORRESPONDIENTE QUE ME LLEGA DE LA ACTION */
      case 'GET_ITINERARIES':
        return {
          ...state,
          itineraries: action.payload
        }
      default:
      return state
    }
  }
  
  export default itineraryReducer