import React from 'react';
import {useSelector} from "react-redux";

const Card = (props) => {
    const state = useSelector((state) => state.chooseFruit);

    return (
        <div className={`card ${state ? "choose":""}`}>
            <img src={props.source} alt=""/>
        </div>
    );
};

export default Card;
