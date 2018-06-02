import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

class SearchUserForm extends Component {
    handleSearchUser = (name) => {
        this.props.searchUser(name);
        this.props.getData(name);
        this.props.reset();
    }

    render() {
        return <form onSubmit={this.props.handleSubmit(this.handleSearchUser)}>
            <div>
                <Field name="text" component="input" type="text" />
            </div>
            <button type='submit'>Search</button>
        </form>;
    }
}

const mapStateToProps = (state) => ({
    name: state.name,
});

const mapDispatchToProps = dispatch => ({
    searchUser: name => dispatch(actions.searchUser(name)),
    getData: name => dispatch(actions.getData(name)),
});

const SearchUser = connect(mapStateToProps, mapDispatchToProps, actions)(SearchUserForm);

export default reduxForm({
    form: 'searchUser',
    keepDirtyOnReinitialize: true,
})(SearchUser);



// export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
//     form: 'searchUser',
// }));