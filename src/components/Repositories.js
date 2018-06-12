import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Spin from './Spinner/Spin';
import * as actions from '../store/actions';

class Repositories extends Component {
    renderSpin() {
        const pathname = window.location.pathname;
        const name = this.getName(pathname);
        this.props.fetchRepos(name);
        return <Spin />
    }

    renderReps() {
        const repositories = this.props.repos.repos;
        console.log(this.props.repos.repos);
        console.log(this.props.error);
        return (
            repositories.length !== 0 ?
                <div>
                    {repositories.map(i => <Card id={i.id} key={i.id} elem={i} name={i.name} description={i.description} fork={i.fork} starsCount={i.stargazers_count} updatedDate={i.updated_at} language={i.language} />)}
                </div>
                : <div> <p>This user doesn't have any repositories.</p> </div>
        );
    }
    renderError() {
        return (
            <div><p>Sorry, there is no user/organization with such a name.</p></div>
        )
    }

    getName = (pathname) => {
        const arr = pathname.split('/');
        return arr[2];
    }

    render() {
        const loading = this.props.loading;
        const error = this.props.error;
        return (
            loading ? this.renderSpin() : error ? this.renderError() : this.renderReps()
        );
    }
}

const mapStateToProps = (state) => ({
    repos: state.search.repos,
    loading: state.search.loading,
    error: state.search.error,
});

const mapDispatchToProps = dispatch => ({
    fetchRepos: name => dispatch(actions.fetchRepos(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);