const initialState = {
  list: [],
  photos: [],
  topicBySlug: {},
}

export const Action = {
  Types: {
    GET_TOPICS: 'GET_TOPICS',
    SET_TOPICS: 'SET_TOPICS',
    GET_TOPIC_BY_SLUG: 'GET_TOPIC_BY_SLUG',
    SET_TOPIC_BY_SLUG: 'SET_TOPIC_BY_SLUG',
    GET_TOPIC_PHOTOS: 'GET_TOPIC_PHOTOS',
    SET_TOPIC_PHOTOS: 'SET_TOPIC_PHOTOS',

  },
  Creators: {
    getTopics: (payload) => ({
      type: Action.Types.GET_TOPICS,
      payload,
    }),
    setTopics: (payload) => ({
      type: Action.Types.SET_TOPICS,
      payload,
    }),
    getTopicBySlug: (slug) => ({
      type: Action.Types.GET_TOPIC_BY_SLUG,
      slug,
    }),
    setTopicBySlug: (data) => ({
      type: Action.Types.SET_TOPIC_BY_SLUG,
      data,
    }),
    getTopicPhotos: (slug) => ({
      type: Action.Types.GET_TOPIC_PHOTOS,
      slug,
    }),
    setTopicPhotos: (data) => ({
      type: Action.Types.SET_TOPIC_PHOTOS,
      data,
    }),
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  default: {
    return state
  }
  case Action.Types.SET_TOPICS: {
    return {
      ...state,
      list: action.payload,
    }
  }
  case Action.Types.SET_TOPIC_BY_SLUG: {
    return {
      ...state,
      topicBySlug: action.data,
    }
  }
  case Action.Types.SET_TOPIC_PHOTOS: {
    return {
      ...state,
      photos: action.data,
    }
  }
  }
}

export default reducer;
