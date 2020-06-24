const FlatsReducer = (state, action) => {
  // compute and return the new state
  if (state === undefined) {
    return []
  }

  // handle actions
  switch(action.type) {
    case 'SET_FLATS':
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

export default FlatsReducer;
