const cityActions= {
    /* HAGO EL PEDIDO A LA API DE LAS CIUDADES */
    getCities: () => {
        return async (dispatch, getState) =>{
            const response = await fetch("http://localhost:4000/api/cities")
            const data= await response.json()
            dispatch({type:"GET_CITIES", payload: data.response})
        }
    },
    /* MANDO EL VALOR DEL INPUT PARA REALIZAR EL FILTRO EN EL REDUCER */
    filterCities: (inputValue) => {
        return (dispatch, getState) =>{
            dispatch({type: "FILTER_CITIES", payload: inputValue })
        }
    }
}
export default cityActions