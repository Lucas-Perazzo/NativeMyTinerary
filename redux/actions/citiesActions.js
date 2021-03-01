import axios from 'axios'

const viewCities = {
    viewAllCities: () => {
        return async (dispatch, getState) => {
            try {
                const data = await axios
                    .get('https://mytineraryback-end.herokuapp.com/api/cities')
                dispatch({
                    type: 'VIEWALL_CITIES',
                    payload: data.data.response
                })
            } catch (e) {
                console.log(e)
            }
        }
    },
    inputValue: (value) => {
        return (dispatch, getState) => {
            dispatch({
                type: 'INPUT_VALUE',
                payload: value
            })
        }
    }

}

export default viewCities