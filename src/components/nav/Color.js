import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as actionCreator from "../../actions";
import {bindActionCreators} from "redux";

const Color = (props) => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const functionsReducer = bindActionCreators(actionCreator,dispatch)

    function changeTheme(){
        functionsReducer.setThemeId(props.id)
        functionsReducer.reveal()
    }

    return (
        <div className="fruit"
             onMouseEnter={() => functionsReducer.setId(props.id) }
             onMouseLeave={() => functionsReducer.setId(state.colorTheme)}
             onClick={() => changeTheme()}
        >
            <span>{props.name}</span>
        </div>
    );
};

export default Color;
