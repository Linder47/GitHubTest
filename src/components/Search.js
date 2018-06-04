import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const SearchUserForm = (props) => {
    const handleSearchUser = (name) => {
        console.log(props);
        props.fetchRepos(name.searchingRep);
        props.reset();
        //this.props.history.push('/search/' + this.state.addText);
    };

    return (
        <form onSubmit={props.handleSubmit(handleSearchUser)}>
            <div>
                <Field name="searchingRep" component="input" type="text" placeholder='here' />
            </div>
            <button type='submit'>Search</button>
        </form>
    )
}

const mapStateToProps = () => {
    console.log(props);
    const props = {};
    return props;
};

const mapDispatchToProps = dispatch => ({
    fetchRepos: name => dispatch(actions.fetchRepos(name)),
});


const SearchUser = reduxForm({
    form: 'searchUser',
})(SearchUserForm);

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);