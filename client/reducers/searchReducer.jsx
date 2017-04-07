const searchReducer = (state = {term: '', value: 1}, action) => {
  switch (action.type) {
    case 'SEARCH_TERM':
      return (Object.assign({}, state, action.search));
    default:
      return state;
  }
}

export default searchReducer;
