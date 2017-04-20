const unapprovedReducer = (state = [], action) => {
  switch (action.type) {
    case 'UNAPPROVED':
      return action.resources;
    case 'EDIT_UNAPPROVED':
      return state.map((resource, index) => {
        if (index === action.edit.index) {
          resource[action.edit.type] = action.edit[action.edit.type];
          return resource;
        }
        return resource;
      });
    default:
      return state;
  }
};

export default unapprovedReducer;
