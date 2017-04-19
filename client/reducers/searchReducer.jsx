const searchReducer = (state = { term: '', language: 'JavaScript', query: {} }, action) => {
  switch (action.type) {
    case 'SEARCH_TERM':
      return Object.assign({}, state, action.search);
    case 'CLEAR_SEARCH':
      return Object.assign({}, state, { term: '', language: 'JavaScript' });
    case 'STORE_QUERY':
      return Object.assign({}, state, { query: { term: action.query.term, language: action.query.language } });
    default:
      return state;
  }
};

export default searchReducer;
