import React, {useState} from 'react';
import Color from "./Color";
import {useSelector} from "react-redux";
import {colorsList} from "../../data/color";

const HiddenMenu = () => {
    const state = useSelector((state) => state)
    return (
        <div className={`hidden_menu ${state.hiddenMenu ? "":"reveal"}`} style={{ background: colorsList.theme[state.colorMenu] }}>
            <Color name="Goyave" id={0}/>
            <Color name="Figue" id={1}/>
            <Color name="Mangue" id={2}/>
            <Color name="Grenade" id={3}/>
            <Color name="Annanas" id={4}/>
            <Color name="Litchi" id={5}/>
        </div>
    );
};

export default HiddenMenu;
