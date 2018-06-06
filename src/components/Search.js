import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const SearchUserForm = (props) => {
    const handleSearchUser = e => {
        e.preventDefault();
        console.log(e);

        const name = props.props.form.searchUser.values.searchingRep;
        console.log(name);
        props.fetchRepos(name);
        props.reset();

        props.history.push('/owner/' + name + '/repos/');
    };

    return (
        //    <form onSubmit={props.handleSubmit(handleSearchUser)}> 
        <form onSubmit={handleSearchUser}>
            <div>
                <Field name="searchingRep" component="input" type="text" placeholder='here' />
            </div>
            <button type='submit'>Search</button>
        </form>
    )
}

// const mapStateToProps = () => {
//     const props = {};
//     // console.log(props);
//     return props;
// };

const mapStateToProps = (state) => ({
    // console.log(state);
    // console.log(state.inputName);
    props: state,
    // repos: state.reducer.repos;
});

const mapDispatchToProps = dispatch => ({
    fetchRepos: name => dispatch(actions.fetchRepos(name)),
    searchUser: name => dispatch(actions.searchUser(name)),
});


const SearchUser = reduxForm({
    form: 'searchUser',
})(SearchUserForm);

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);