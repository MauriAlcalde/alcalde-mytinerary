const initialState = {
    cities: [],
    citiesFiltradas: [],

}
 
function cityReducer(state = initialState, action){
    switch (action.type) {
        /* RELLENO LOS ARRAYS CON LAS CIUDADES QUE ME DEVUELVE LA API */
        case ("GET_CITIES"):
            return {
                ...state,
                cities: action.payload,
                citiesFiltradas: action.payload
            }
        /* REALIZO EL FILTRO DE LAS CIUDADES UTILIZANDO EL PAYLOAD(INPUTVALUE) Y VOY DEVOLVIENDO ESO AL SEGUNDO ARRAY (MASO MENOS XD) */
        case("FILTER_CITIES") :
        return {
            ...state,
            citiesFiltradas: state.cities.filter(ciudad => ciudad.name.toUpperCase().indexOf(action.payload.toUpperCase().trim()) === 0) 
            
        }   
        default:
            return state
        }
      }
      
    export default cityReducer

