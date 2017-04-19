const unapprovedReducer = (state = [], action) => {
  switch (action.type) {
    case 'UNAPPROVED':
      return action.resources;
    case 'EDIT_UNAPPROVED':
      return state.map((resource, index) => {
        if (resource.index === actions.index) {
        
        } else {
          return resource
        }

      })
    default:
      return state;
  }
};

export default unapprovedReducer;
