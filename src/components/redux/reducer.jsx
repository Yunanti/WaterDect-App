const initialState = {
  select: '',
};

function selectReducer(state = initialState, action) {
  switch (action.type) {
    case 'setSelect':
      return {
        ...state,
        select: action.payload,
      };
    default:
      return state;
  }
}

export default selectReducer;
