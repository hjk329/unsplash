const initialState = {
  isVisible: false,

}

export const Action = {
  Types: {
    SHOW_POPUP: 'SHOW_POPUP',
    HANDLE_POPUP: 'HANDLE_POPUP',
    CLOSE_POPUP: 'CLOSE_POPUP',
  },
  Creators: {
    showPopup: (payload) => ({
      type: Action.Types.SHOW_POPUP,
      payload,
    }),
    handlePopup: (data) => ({
      type: Action.Types.HANDLE_POPUP,
      data,
    }),
    closePopup: (payload) => ({
      type: Action.Types.CLOSE_POPUP,
      payload,
    }),
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  default: {
    return state
  }
  case Action.Types.HANDLE_POPUP: {
    return {
      ...state,
      isVisible: action.data,

    }
  }
  }
}

export default reducer;
