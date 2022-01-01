import React from 'react';

const HiddenMenu = (props) => {
    if(!props.reveal){
        return (
            <div className="hidden_menu reveal">
                <div className="fruit"><span>Goyave</span></div>
                <div className="fruit"><span>Figue</span></div>
                <div className="fruit"><span>Mangue</span></div>
                <div className="fruit"><span>Grenade</span></div>
                <div className="fruit"><span>Litchi</span></div>
                <div className="fruit"><span>Papaye</span></div>
            </div>
        );
    }else{
        return (
            <div className="hidden_menu">

            </div>
        );
    }

};

export default HiddenMenu;
