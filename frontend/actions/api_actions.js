import * as APIUtil from '../utils/api_util';

export const RECEIVE_CURRENT_PROFILE = "RECEIVE_CURRENT_PROFILE";
export const RECEIVE_PROFILE_ERRORS = "RECEIVE_PROFILE_ERRORS";
export const CLEAR_PROFILE_ERRORS = "CLEAR_PROFILE_ERRORS";
export const RECEIVE_ALL_PROFILES = "RECEIVE_ALL_PROFILES";

export const receiveCurrentProfile = profile => ({
  type: RECEIVE_CURRENT_PROFILE,
  profile
});

export const receiveAllProfiles = profiles => ({
  type: RECEIVE_ALL_PROFILES,
  profiles
});

export const receiveProfileErrors = errors => ({
  type: RECEIVE_PROFILE_ERRORS,
  errors
});

export const createProfile = profile => dispatch => (
  APIUtil.createProfile(profile).then(profile => (
    dispatch(receiveCurrentProfile(profile))
  ), err => (
    dispatch(receiveProfileErrors(err.responseJSON))
  ))
);

export const fetchProfiles = () => dispatch => (
  APIUtil.fetchProfiles().then(profiles => (
    dispatch(receiveCurrentProfile(profiles))
  ), err => (
    dispatch(receiveProfileErrors(err.responseJSON))
  ))
);

export const fetchProfile = id => dispatch => (
  APIUtil.fetchProfile(id).then(profile => (
    dispatch(receiveCurrentProfile(profile))
  ), err => (
    dispatch(receiveProfileErrors(err.responseJSON))
  ))
);
