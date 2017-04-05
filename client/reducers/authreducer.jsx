function authreducer (state = {}, action) {
  switch (action.type) {
    case 'STORE_USER':
      return {name: action.payload.name, username: action.payload.username, password: action.payload.password};
    default:
      return state;
  }
};



export default authreducer;
