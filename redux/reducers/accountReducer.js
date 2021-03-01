const initialState = {
    loggedUser: null
}

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_USER': 
            /* localStorage.setItem('name', action.payload.response.name)
            localStorage.setItem('lastName', action.payload.response.lastName)
            localStorage.setItem('img', action.payload.response.img)
            localStorage.setItem('token', action.payload.response.token)
 */
            return {
                ...state,
                loggedUser: action.payload.response
            }
        case 'LOG_OUT':
            /* localStorage.clear() */
            return {
                ...state,
                loggedUser: null

            }    
        default: 
            return state
    }
}

module.exports = accountReducer