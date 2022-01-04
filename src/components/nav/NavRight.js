import React, {useState} from 'react';
import HiddenMenu from "./HiddenMenu";
import {useDispatch, useSelector} from "react-redux";
import {reveal} from "../../actions";
import {colorsList} from "../../data/color";

const NavRight = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <div className="navbar_right">
            <ul className="fruits">
                <span><li className={state.hiddenMenu ? "":"reveal"}>Goyave</li></span>
                <span><li className={state.hiddenMenu ? "":"reveal"}>Figue</li></span>
                <span><li className={state.hiddenMenu ? "":"reveal"}>Mangue</li></span>
                <span><li className={state.hiddenMenu ? "":"reveal"}>Grenade</li></span>
                <span><li className={state.hiddenMenu ? "":"reveal"}>Annanas</li></span>
                <span><li className={state.hiddenMenu ? "":"reveal"}>Litchi</li></span>
            </ul>
            <div className="hamburger" onClick={() => dispatch(reveal())} >
                <div className={`hamburger_line ${state.hiddenMenu ? "":"reveal"} first`} style={{ background: state.hiddenMenu ? colorsList.text[state.colorTheme]:"white"}}></div>
                <div className={`hamburger_line ${state.hiddenMenu ? "":"reveal"} second`} style={{ background: state.hiddenMenu ? colorsList.text[state.colorTheme]:"white"}}></div>
            </div>
            <HiddenMenu />
        </div>
    );
};

export default NavRight;
