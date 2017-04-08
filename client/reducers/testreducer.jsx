

function testreducer (state = [], action) {
  switch (action.type) {
    case 'TEST':
      return action.testreducer;
    default:
      return state;
  }
};



export default testreducer;
