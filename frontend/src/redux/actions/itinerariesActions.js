const itinerariesActions = {
  /* HAGO EL PEDIDO A LA API RECIBIENDO EL ID DE LA CIUDAD COMO PARAMETRO Y CONCATENANDOLO AL FINAL PARA QUE DEPENDIENDO DE LA CIUDAD QUE SEA ME DEVUELVA LOS ITINERARIOS DE ESA CIUDAD */
    getItineraries: (id) => {
      return async (dispatch, getState) => {
        const response = await fetch('http://localhost:4000/api/itineraries/'+id)
        const data = await response.json()
        dispatch({type: 'GET_ITINERARIES', payload: data.response})
      }
    }
  }
  
  export default itinerariesActions