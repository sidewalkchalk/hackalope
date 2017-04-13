const ProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_PROFILE':
      return Object.assign({}, state, action.userProfile);
    default:
      return state;
  }
};

export default ProfileReducer;

