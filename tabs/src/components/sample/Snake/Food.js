import React from "react";
import "./index.css";

const Food = props => {
    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    };
    return <div className="snake-food" style={style} />;
};

export default Food;
