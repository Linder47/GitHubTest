import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const SearchUserForm = (props) => {
  console.log(props.props);
  const handleSearchUser = (e) => {
    e.preventDefault();
    const name = props.props.form.searchUser.values.searchingRep;
    console.log(props);
    console.log(props.props.form.searchUser.values.searchingRep);
    props.fetchRepos(name);
    const link = `/owner/${name}/repos/`;
    const { history } = props;
    history.push(link);
  };

  return (
    <form onSubmit={handleSearchUser}>
      <div>
        <Field name="searchingRep" component="input" type="text" placeholder="here" />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

const mapStateToProps = state => ({
  props: state,
});

const mapDispatchToProps = dispatch => ({
  fetchRepos: name => dispatch(actions.fetchRepos(name)),
  searchUser: name => dispatch(actions.searchUser(name)),
});

SearchUserForm.propTypes = {
  props: PropTypes.instanceOf(Object).isRequired,
  fetchRepos: PropTypes.func.isRequired,
};

const SearchUser = reduxForm({
  form: 'searchUser',
})(SearchUserForm);

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
