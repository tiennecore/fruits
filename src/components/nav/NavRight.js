import React, {useState} from 'react';
import HiddenMenu from "./HiddenMenu";

const NavRight = () => {
    const [hidden,setHidden]=useState(true)
    return (
        <div className="navbar_right">
            <ul className="fruits">
                <span><li className={hidden ? "":"reveal"}>Goyave</li></span>
                <span><li className={hidden ? "":"reveal"}>Figue</li></span>
                <span><li className={hidden ? "":"reveal"}>Mangue</li></span>
                <span><li className={hidden ? "":"reveal"}>Grenade</li></span>
                <span><li className={hidden ? "":"reveal"}>Litchi</li></span>
                <span><li className={hidden ? "":"reveal"}>Papaye</li></span>
            </ul>
            <div className="hamburger" onClick={() => setHidden(!hidden)}>
                <div className={`hamburger_line ${hidden ? "":"reveal"} first`}></div>
                <div className={`hamburger_line ${hidden ? "":"reveal"} second`}></div>
            </div>
            <HiddenMenu reveal={hidden}/>
        </div>
    );
};

export default NavRight;
