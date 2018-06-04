import React, {Component} from 'react';
import { connect } from 'react-redux';

class Repositories extends Component {
    ComponentDidMount() {

    }

    render() {
    console.log(this.props);
    console.log(this.props.repos);
    return('heh');
    }
}

const mapStateToProps = (state) => {
    console.log(state.reducer.repos.repos);
    repos: state.reducer.repos;
};

// const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps)(Repositories);