import { combineReducers } from 'redux';
import ProfileReducer from './profile_reducer';

export default combineReducers({
  profile: ProfileReducer,
});
