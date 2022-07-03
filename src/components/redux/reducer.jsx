const initialState = {
  select: '',
  activePage: '',
};

function selectReducer(state = initialState, action) {
  switch (action.type) {
    case 'setSelect':
      return {
        ...state,
        select: action.payload,
      };
    case 'setActivePage':
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
}

export default selectReducer;
