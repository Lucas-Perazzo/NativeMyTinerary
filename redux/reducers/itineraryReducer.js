const initialState = {
    itineraries: []
}

    const itineraryReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'VIEW_ITINERARIES':
                return {
                    ...state,
                    itineraries: action.payload
            }
            case 'LIKES_ITINERARY':
                return {
                    ...state
                }
        default:
            return state
    }
}


export default itineraryReducer