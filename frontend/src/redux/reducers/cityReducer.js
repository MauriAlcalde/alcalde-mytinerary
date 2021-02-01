const initialState = {
    cities: [],
    citiesFiltradas: [],

}

function cityReducer(state = initialState, action){
    switch (action.type) {
        case ("GET_CITIES"):
            console.log("rellene cities")
            return {
                ...state,
                cities: action.payload,
                citiesFiltradas: action.payload
            }
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