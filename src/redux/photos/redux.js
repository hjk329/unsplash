const initialState = {
    list : []
}

export const Action = {
    Types : {
        GET_PHOTOS : 'GET_PHOTOS',
        SET_PHOTOS : 'SET_PHOTOS',
        GET_PHOTOS_RELATED : 'GET_PHOTOS_RELATED',
        SET_PHOTOS_RELATED : 'SET_PHOTOS_RELATED'
    },
    Creators : {
        getPhotos : (payload) => {
            return {
                type : Action.Types.GET_PHOTOS,
                payload
            }
        },
        setPhotos : (payload) => {
            return {
                type : Action.Types.SET_PHOTOS,
                payload
            }
        },
        getPhotosRelated : (id) => {
            return {
                type : Action.Types.GET_PHOTOS_RELATED,
                id
            }
        },
        setPhotosRelated : (data) => {
            return {
                type : Action.Types.SET_PHOTOS_RELATED,
                data
            }
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default : {
            return state
        }
        case Action.Types.SET_PHOTOS : {
            return {
                ...state,
                list : action.payload
            }
        }
        case Action.Types.SET_PHOTOS_RELATED : {
            return {
                ...state,
                related : action.data
            }
        }
    }
}

export default reducer;