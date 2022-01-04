import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as actionCreator from "../../actions";
import {bindActionCreators} from "redux";
import {useHistory} from "react-router-dom";

const Color = (props) => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const functionsReducer = bindActionCreators(actionCreator,dispatch)
    const history = useHistory()
    const pageDestination = "/"+ props.name
    function changeTheme(){
        console.log(state)
        functionsReducer.setThemeId(props.id)
        functionsReducer.reveal()
        functionsReducer.choose(true)
        window.setTimeout(() => {
            history.push(pageDestination);
        }, 1000)
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
