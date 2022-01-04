import React ,{useState}from 'react';
import Navigation from "../components/nav/Navigation";
import {colorsList} from "../data/color";
import {useSelector} from "react-redux";
import Main from "../components/Main";

const Home = () => {
    const state = useSelector((state) => state)

    return (
        <div className="container" style={{ background: colorsList.background[state.colorTheme],color : colorsList.text[state.colorTheme] }}>
            <Navigation />
            <Main />
        </div>
    );
};

export default Home;