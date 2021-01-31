const cityActions= {
    getCities: () => {
        return async (dispatch, getState) =>{
            const response = await fetch("http://localhost:4000/api/cities")
            const data= await response.json()
            dispatch({type:"GET_CITIES", payload: data.response})
        }
    },
    filterCities: (inputValue) => {
        return (dispatch, getState) =>{
            dispatch({type: "FILTER_CITIES", payload: inputValue })
        }
    }
}
export default cityActions