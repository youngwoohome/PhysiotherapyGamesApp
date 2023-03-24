import React from "react";
import "./Button.css";

const Button = ({ onUp, onDown, onLeft, onRight }) => {
    return (
        <div className="snake-control-buttons">
            <div className="snake-control-upwards">
                <input className="snake-control-up" onClick={onUp} type="button" value="UP" />
            </div>
            <div className="snake-control-sideways">
                <input className="snake-control-left" onClick={onLeft} type="button" value="LEFT" />
                <input
                    className="snake-control-right"
                    onClick={onRight}
                    type="button"
                    value="RIGHT"
                />
            </div>
            <div className="snake-control-downwards">
                <input className="snake-control-down" onClick={onDown} type="button" value="DOWN" />
            </div>
        </div>
    );
};
export default Button;
