import React, {useState} from 'react';

const Color = (values) => {
    const [color,setColor] = useState(values.oldColor)

    return (
        <div className="fruit"
             onMouseEnter={() => values.setOldColor(values.color)}
             onMouseLeave={() => values.setOldColor(values.oldColor)}
        >
            <span>{values.name}</span>
        </div>
    );
};

export default Color;
