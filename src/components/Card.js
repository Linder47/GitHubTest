import React from 'react';

const Card = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>fork? {props.fork ? `yes` : `no`}</p>
            <p>stars: {props.starsCount}</p>
            {/* <p></p> */}
        </div>
    );
}

export default Card;