const initialState = {
    photos : {
       results : []
    },
    collections : {
        results : []
    },
    users : {
        results : []
    },
    related_searches : []

}

export const Action = {
    Types : {
        SEARCH_PHOTOS : 'SEARCH_PHOTOS',
        SET_SEARCH_RESULTS : 'SET_SEARCH_RESULTS'

    },
    Creators : {
        searchPhotos : (payload) => ({
                type : Action.Types.SEARCH_PHOTOS,
                payload
            }
        ),
        setSearchResults : (payload) => ({
            type : Action.Types.SET_SEARCH_RESULTS,
            payload
        })

        }
    }




const reducer = (state = initialState, action) => {
    switch(action.type) {
        default : {
            return state
        }
        case Action.Types.SET_SEARCH_RESULTS : {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}

export default reducer;