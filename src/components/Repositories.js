import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Spin from './Spinner/Spin';
import * as actions from '../store/actions';

class Repositories extends Component {
    // ComponentDidMount() {
    //     console.log(this.props);
    //     console.log(window.location.href);
    //     if (!this.props.repos) {
    //         //достать из урла оунера и пихнуть его в фетч
    //     }
    // }

    renderSpin() {
        const pathname = window.location.pathname;
        const name = this.getName(pathname);
        this.props.fetchRepos(name);
        return <Spin />
    }

    renderReps() {
        const repositories = this.props.repos.repos;
        console.log(this.props.repos.repos);
        return (
            <div>
                {repositories.map(i => <Card id={i.id} key={i.id} name={i.name} description={i.description} fork={i.fork} starsCount={i.stargazers_count} updatedDate={i.updated_at} language={i.language} />)}
            </div>
        );
    }

    getName = (pathname) => {
        const arr = pathname.split('/');
        return arr[2];
    }

    render() {
        const loading = this.props.loading;
        return (
            loading ? this.renderSpin() : this.renderReps()
        );
    }
}

const mapStateToProps = (state) => ({
    repos: state.search.repos,
    loading: state.search.loading,
});

const mapDispatchToProps = dispatch => ({
    fetchRepos: name => dispatch(actions.fetchRepos(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);