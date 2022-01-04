import React from 'react';
import Navigation from "../components/nav/Navigation";
import {colorsList} from "../data/color";
import {useDispatch, useSelector} from "react-redux";
import Main from "../components/Main";
import {bindActionCreators} from "redux";
import * as actionCreator from "../actions";

const Home = () => {
    const state = useSelector((state) => state.colorTheme)
    const dispatch = useDispatch()
    const functionsReducer = bindActionCreators(actionCreator,dispatch)

    functionsReducer.choose(true)

    return (
        <div className="container" style={{ background: colorsList.background[state],color : colorsList.text[state] }}>
            <Navigation />
            <Main />
        </div>
    );
};

export default Home;