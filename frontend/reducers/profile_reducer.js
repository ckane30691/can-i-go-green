import merge from 'lodash/merge';

import {
	RECEIVE_CURRENT_PROFILE,
	RECEIVE_ALL_PROFILES,
} from '../actions/api_actions';

const ProfileReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState = merge({}, state);

	switch (action.type) {
		case RECEIVE_CURRENT_PROFILE:
			return action.profile;
		case RECEIVE_ALL_PROFILES:
			newState[action.profile.id] = action.profile;
			return newState;
		default:
			return state;
	}
};

export default ProfileReducer;
