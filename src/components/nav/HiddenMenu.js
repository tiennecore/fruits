import React, {useState} from 'react';
import Color from "./Color";

const HiddenMenu = (props) => {
    const colorList = [
        "hsl(359, 22%, 37%)",
        "hsl(240, 18%, 38%)",
        "hsl(115,18%,38%)",
        "hsl(36,54%,40%)",
        "hsl(196,44%,51%)",
        "hsl(12,59%,41%)"]
    const [oldColor,setOldColor] = useState(colorList[0])
    return (
        <div className={`hidden_menu ${props.reveal ? "":"reveal"}`} style={{ background: oldColor }}>
            <Color color={colorList[0]} name="Goyave" oldColor={oldColor} setOldColor={setOldColor} />
            <Color color={colorList[1]} name="Figue" oldColor={oldColor} setOldColor={setOldColor} />
            <Color color={colorList[2]} name="Mangue" oldColor={oldColor} setOldColor={setOldColor} />
            <Color color={colorList[3]} name="Grenade" oldColor={oldColor} setOldColor={setOldColor} />
            <Color color={colorList[4]} name="Litchi" oldColor={oldColor} setOldColor={setOldColor} />
            <Color color={colorList[5]} name="Papaye" oldColor={oldColor} setOldColor={setOldColor} />
        </div>
    );
};

export default HiddenMenu;
