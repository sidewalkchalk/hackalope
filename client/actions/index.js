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

export const submissionData = (submission) => {
  return {
    type: 'USER_SUBMISSION_DATA',
    submission
  }
};

export const searchTerm = (search) => {
  return {
    type: 'SEARCH_TERM',
    search
  }
}



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
