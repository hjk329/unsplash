const initialState = {
  list: [],
  photoById: {
    related_collections: {
      results: [],
    },
  },
  related: [],
}

export const Action = {
  Types: {
    GET_PHOTOS: 'GET_PHOTOS',
    SET_PHOTOS: 'SET_PHOTOS',

    GET_PHOTOS_RELATED: 'GET_PHOTOS_RELATED',
    SET_PHOTOS_RELATED: 'SET_PHOTOS_RELATED',

    GET_PHOTO_BY_ID: 'GET_PHOTO_BY_ID',
    SET_PHOTO_BY_ID: 'SET_PHOTO_BY_ID',

    GET_PHOTO_PAGE: 'GET_PHOTO_PAGE',
  },
  Creators: {
    getPhotos: (payload) => ({
      type: Action.Types.GET_PHOTOS,
      payload,
    }),
    setPhotos: (payload) => ({
      type: Action.Types.SET_PHOTOS,
      payload,
    }),
    getPhotosRelated: (id) => ({
      type: Action.Types.GET_PHOTOS_RELATED,
      id,
    }),
    setPhotosRelated: (data) => ({
      type: Action.Types.SET_PHOTOS_RELATED,
      data,
    }),
    getPhotoById: (payload) => ({
      type: Action.Types.GET_PHOTO_BY_ID,
      payload,
    }),
    setPhotoById: (data) => ({
      type: Action.Types.SET_PHOTO_BY_ID,
      data,
    }),
    getPhotoPage: (payload) => ({
      type: Action.Types.GET_PHOTO_PAGE,
      payload,
    }),
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  default: {
    return state
  }
  case Action.Types.SET_PHOTOS: {
    return {
      ...state,
      list: action.payload,
    }
  }
  case Action.Types.SET_PHOTOS_RELATED: {
    return {
      ...state,
      related: action.data,
    }
  }
  case Action.Types.SET_PHOTO_BY_ID: {
    return {
      ...state,
      photoById: action.data,
    }
  }
  }
}

export default reducer;
