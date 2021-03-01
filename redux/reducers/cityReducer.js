

const initialState = {
    cities: [],
    citiesFilter: []
}

const cityReducer = (state = initialState, action) => {
    switch (action.type){
        case 'VIEWALL_CITIES': 
            return {
                ...state,
                cities: action.payload,
                citiesFilter : action.payload
            }
        case 'INPUT_VALUE':
            return {
                ...state,
                citiesFilter:  state.cities.filter(city => city.cityTitle.toLowerCase().indexOf(action.payload.toLowerCase()) === 0)
            }
        default :
            return state
    }
}

export default cityReducer