const unapprovedReducer = (state = [], action) => {
  switch (action.type) {
    case 'UNAPPROVED':
      return action.resources;
    default:
      return state;
  }
};

export default unapprovedReducer;
