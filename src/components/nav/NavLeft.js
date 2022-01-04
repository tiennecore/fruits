import React from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreator from "../../actions";

const NavLeft = () => {
    const history = useHistory()
    const functionsReducer = bindActionCreators(actionCreator,useDispatch())

    function returnHome(){
        history.push("/")
        window.setTimeout(() => {
            functionsReducer.choose(false)
        }, 100)
    }
    return (
        <div className="navbar_left" onClick={()=> returnHome()}>
            <h1>Fruits</h1>
        </div>
    );
};

export default NavLeft;
