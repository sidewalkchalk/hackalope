export default function (state = {}, action) {
    switch (action.type) {
        case 'RESULT_SELECTED':
              console.log('Aaaaaaa', state);
            return Object.assign({}, state, action.result); 
            break;
    }
    return state;
}