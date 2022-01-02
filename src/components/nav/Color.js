import React, {useState} from 'react';

const Color = (values) => {
    const color = values.oldColor
    return (
        <div className="fruit"
             onMouseEnter={() => values.setOldColor(values.color)}
             onMouseLeave={() => values.setOldColor(color)}
        >
            <span>{values.name}</span>
        </div>
    );
};

export default Color;
