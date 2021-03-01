import axios from 'axios'

const itinerariesActions = {
    viewItineraries: (id) => {
        return async (dispatch, getState) => {
            try {
                const data = await axios
                    .get(`https://mytineraryback-end.herokuapp.com/api/itineraries/${id}`)
                dispatch({
                    type: 'VIEW_ITINERARIES',
                    payload: data.data.response
                })
            } catch (e) {
                console.log(e)
            }
        }
    },
    likeItinerary: (id, token) => {
        return async (dispatch, getState) => {
            try {
                const data = await axios.post(`https://mytineraryback-end.herokuapp.com/api/itinerary/like/${id}`, {token} , { headers: { Authorization: `Bearer ${token}`}})
                dispatch({type: 'LIKES_ITINERARY', payload: data.data.response})
            } catch (error){
                console.log(error)
            }
        }
    },
    dislikeItinerary: (id, token) => {
        return async (dispatch, getState) => {
            try {
                const data = await axios.post(`https://mytineraryback-end.herokuapp.com/api/itinerary/dislike/${id}`, {token}, { headers: { Authorization: `Bearer ${token}`}})
                dispatch({type: 'LIKES_ITINERARY', payload: data.data.response})
            } catch (error) {
                console.log(error)
            }
        }
    },

    postComment: (comment) => {
        const { token, id, name, img , cityId} = comment
        const actualComment = comment.comment
        return async (dispatch, getState) => {
            const response = await axios.post(`https://mytineraryback-end.herokuapp.com/api/itinerary/${id}`, {actualComment, name, img} , {
                headers: { 
                    Authorization: `Bearer ${token}`,
                },
            })
            if (response.data.success === true) {
                const response = await axios.get(`https://mytineraryback-end.herokuapp.com/api/itineraries/${cityId}`)

                dispatch({type: 'VIEW_ITINERARIES', payload: response.data.response })
            } 
            }

    },

    deleteComment: (itineraryId,cityId,token,commentId) => {
        return async (dispatch, getState) => {
            const response = await axios.delete(`https://mytineraryback-end.herokuapp.com/api/itinerary/${itineraryId}/${commentId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            if (response.data.success === true) {
                const response = await axios.get(`https://mytineraryback-end.herokuapp.com/api/itineraries/${cityId}`)

                dispatch({type: 'VIEW_ITINERARIES', payload: response.data.response })
            } 
        }
    },

    editComment: (newComment) => {
        const {cityId, id, idComment, loggedUserToken, newEditComment} = newComment
        return async (dispatch, getState) => {
            const response = await axios.put(`https://mytineraryback-end.herokuapp.com/api/itinerary/${id}`, {idComment, loggedUserToken, newEditComment}, {
                headers: {
                    Authorization: `Bearer ${loggedUserToken}`
                },
            })
            if (response.data.success === true) {
                const response = await axios.get(`https://mytineraryback-end.herokuapp.com/api/itineraries/${cityId}`)

                dispatch({type: 'VIEW_ITINERARIES', payload: response.data.response })
            } 
        }  
    }   
    

}

export default itinerariesActions