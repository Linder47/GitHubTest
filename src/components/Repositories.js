import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from './Card';
import Spin from './Spinner/Spin';
import * as actions from '../store/actions';

class Repositories extends Component {
  getName = (pathname) => {
    const arr = pathname.split('/');
    return arr[2];
  }

  renderReps() {
    const repositories = this.props.repos.repos;
    return (
      repositories.length !== 0 ?
        <div>
          {repositories.map(i => (<Card
            id={i.id}
            key={i.id}
            elem={i}
            name={i.name}
            description={i.description}
            fork={i.fork}
            starsCount={i.stargazers_count}
            updatedDate={i.updated_at}
            language={i.language}
          />))}
        </div> : <div> <p>This user does not have any repositories.</p> </div>
    );
  }

  renderSpin() {
    const { pathname } = window.location;
    const name = this.getName(pathname);
    this.props.fetchRepos(name);
    return <Spin />;
  }

  render() {
    const { loading, error } = this.props;
    const rendError = <div><p>Sorry, there is no user/organization with such a name.</p></div>;
    if (loading) {
      return (
        this.renderSpin()
      );
    }
    return (
      error ? rendError : this.renderReps()
    );
  }
}

const mapStateToProps = state => ({
  repos: state.search.repos,
  loading: state.search.loading,
  error: state.search.error,
});

const mapDispatchToProps = dispatch => ({
  fetchRepos: name => dispatch(actions.fetchRepos(name)),
});

Repositories.propTypes = {
  repos: PropTypes.arrayOf.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchRepos: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
