import React from 'react';

const Card = (props) => {
    return (
        <div className="card ">
            <img src={props.source} alt=""/>
        </div>
    );
};

export default Card;
