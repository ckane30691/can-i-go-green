import { connect } from 'react-redux';
import SplashForm from './splash_form';
import { createProfile } from '../../actions/api_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  profile: state.entities.profile,
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createProfile: profile => dispatch(createProfile(profile))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashForm));
