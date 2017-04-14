const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_PROFILE':
      return Object.assign({}, state, action.profile);
    default:
      return state;
  }
};

export default profileReducer;

