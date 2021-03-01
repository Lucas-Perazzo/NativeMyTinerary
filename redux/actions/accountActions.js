import axios from 'axios'

const accountActions = {
    newAccount : (newUser) => {
        return async (dispatch, getState) => {
            const response = await axios.post('https://mytineraryback-end.herokuapp.com/api/user/register', newUser)
            if (!response.data.success) {
                return response.data
            } 
            
            dispatch({type: 'LOG_USER', payload: response.data })
        }
    },

    logout: () => {
        return (dispatch, getState) => {
            dispatch({type: 'LOG_OUT'})
        }
    },

    localStorageLog: (token) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post('https://mytineraryback-end.herokuapp.com/api/user/localStorage', {token}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                dispatch({type: 'LOG_USER', payload: {response: {...response.data.response}}})
            } catch (err) {
                if (err.response.status === 401){
                    alert('No tiene un token valido')
                    localStorage.clear()
                    return '/'
                }
            }
        }
    },

    login: (user) => {
        return async (dispatch, getState) => {
            const response = await axios.post('https://mytineraryback-end.herokuapp.com/api/user/signin', user)
            if (!response.data.success){
                return response.data
            }
            dispatch ({type: 'LOG_USER', payload: response.data}) 
        }
    }
}

export default accountActions