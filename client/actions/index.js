export const selectResult = (result) => {
    console.log("You clicked on result: ", result.title);
    return {
        type: 'RESULT_SELECTED',
        result
    }
};

export const selectUser = (user) => {
    console.log("You've set the user to: ", user);
    return {
        type: 'STORE_USER',
        user
    }
};


