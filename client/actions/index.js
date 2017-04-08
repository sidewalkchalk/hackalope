//Need to standardize nomenclature between actions and reducers

export const selectResult = (result) => {
  return {
    type: 'RESULT_SELECTED',
    result
  }
};

export const selectUser = (user) => {
  return {
    type: 'STORE_USER',
    user
  }
};

export const userFormData = (userFormData) => {
  return {
    type: 'USER_FORM_DATA',
    userFormData
  }
};

export const clearUser = () => {
  return {
    type: 'CLEAR_USER'
  }
}

export const submissionData = (submission) => {
  return {
    type: 'USER_SUBMISSION_DATA',
    submission
  };
};

export const clearSubmissionData = () => {
  return {
    type: 'CLEAR_SUBMISSION_DATA'
  };
};

export const searchTerm = (search) => {
  return {
    type: 'SEARCH_TERM',
    search
  };
};

export const clearSearch = () => {
  return {
    type: 'CLEAR_SEARCH'
  };
};

export const signUpDialog = (dialogs) => {
  return {
    type: 'SIGNUP_DIALOG_OPEN',
    dialogs
  };
};

export const submitDialog = (dialogs) => {
  return {
    type: 'SUBMIT_DIALOG_OPEN',
    dialogs
  };
};

export const logInDialog = (dialogs) => {
  return {
    type: 'LOGIN_DIALOG_OPEN',
    dialogs
  };
};



// to implement

// export const commentsByUser = ({{prop}}) => {
//     console.log("Comments by user ",{{prop}} );
//     return {
//         type: 'COMMENTS_USER',
//         {{prop}}
//     }
// };

// export const commentsByResource = ({{prop}}) => {
//     console.log("Comments by resource ", {{prop}});
//     return {
//         type: 'COMMENTS_RESOURCE',
//         {{prop}}
//     }
// };
// export const favoritesByUser = ({{prop}}) => {
//     console.log("Favorites by user", {{prop}});
//     return {
//         type: 'FAVORITES_USER',
//         {{prop}}
//     }
// };
