import React from 'react';
import Navigation from "../../components/nav/Navigation";
import {colorsList} from "../../data/color";
import {useSelector} from "react-redux";

const Goyave = () => {
    const state = useSelector((state) => state.colorTheme)

    return (
        <div className="container" style={{ background: colorsList.background[state],color : colorsList.text[state] }}>
            <Navigation />
            <span>blabla</span>

        </div>
    );
};

export default Goyave;
