import React from "react";
import { Link } from 'react-router-dom';
import "./Menu.css";

const Menu = ({ onRouteChange }) => {
    return (
        <div className="snake-wrapper">
            <div>
                <input
                    onClick={onRouteChange}
                    className="start"
                    type="button"
                    value="start game"
                />
                <button className="back btn"><Link to="/games">Back To Home</Link></button>
            </div>
        </div>
    );
};

export default Menu;
