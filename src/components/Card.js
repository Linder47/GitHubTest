import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import Dialog from './Dialog';

class Card extends Component {
    state = {
        dialogOpen: false,
    }

    handleDialog() {
        this.setState({
            dialogOpen: !this.state.dialogOpen
        });
    }

    render() {
        return (
            <div>
                <RepNameTitle onClick={this.handleDialog}>{this.props.name}</RepNameTitle>
                <p>{this.props.description}</p>
                <p>fork? {this.props.fork ? `yes` : `no`}</p>
                <p>stars: {this.props.starsCount}</p>
                <p>Updated on {this.props.updatedDate}</p>
                <p>{this.props.language}</p>

                {/* {this.state.dialogOpen ? <Dialog elem={this.props.elem} link={this.props.url} /> : null} */}
            </div>
        );
    }
}

const RepNameTitle = styled.p`
    font-size: 20px;
`;

Card.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    fork: PropTypes.bool,
    starsCount: PropTypes.number,
    updatedDate: PropTypes.string,
    language: PropTypes.string,
    elem: PropTypes.object,
}

export default Card;