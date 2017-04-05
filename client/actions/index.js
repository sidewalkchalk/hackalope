export const selectResult = (result) => {
    console.log("You clicked on result: ", result.title);
    return {
        type: 'RESULT_SELECTED',
        result
    }
};
