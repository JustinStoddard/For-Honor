const profiles = ( state = [], action) => {
  switch(action.type) {
    case 'PROFILES':
      return action.profiles
    case 'ADD_PROFILE':
      return [action.profile, ...state];
    default:
      return state
  }
}

export default profiles;