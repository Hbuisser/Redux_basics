const selectedFlatReducer = (state, action) => {
  // compute and return the new state
  if (state === undefined) {
    return null;
  }

  // handle actions
  switch(action.type) {
    case 'SELECT_FLAT':
      return action.playload;
    default:
      return state;
  }

  // if (action.type === 'SET_FLATS') {
  //   return action.playload;
  // } else {
  //   return state;
  // }

}

export default selectedFlatReducer;
