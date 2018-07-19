import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dialog from './Dialog';

class Card extends Component {
  state = {
    dialogOpen: false,
  }

  handleDialog = () => {
    console.log(this);
    this.setState({
      dialogOpen: !this.state.dialogOpen,
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <RepNameTitle onClick={this.handleDialog}>{this.props.name}</RepNameTitle>
        <p>{this.props.description}</p>
        <p>fork? {this.props.fork ? 'yes' : 'no'}</p>
        <p>stars: {this.props.starsCount}</p>
        <p>Updated on {this.props.updatedDate}</p>
        <p>{this.props.language}</p>
        {this.state.dialogOpen ? <Dialog elem={this.props.elem} /> : null}
      </div>
    );
  }
}

const RepNameTitle = styled.p`
    font-size: 20px;
`;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fork: PropTypes.bool.isRequired,
  starsCount: PropTypes.number.isRequired,
  updatedDate: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  elem: PropTypes.instanceOf(Object).isRequired,
};

export default Card;
