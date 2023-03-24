import React from "react";
import { Link } from "react-router-dom";

export const Ledger = () => {
    return (
        <div>
            {/* <h2>Below is the Ledger</h2> */}
            <ul>
                <li> Alerted when caught by snake or by the ladder</li>
                <li>
                    The square you land on is in alert
                </li>
                <li>
                    Snake and Ladder starting positions are highlighted in boxes
                </li>
                <li>
                    When anyone crosses 100, the game is over
                </li>
                <li>Once game is over, you will be redirected out of the game</li>
            </ul>
            {/* <button className="back btn"><Link to="/games">Back To Home</Link></button> */}
            <div className="ledger-player">
                Player 1 is <div className="P1_shape m-l-20" />
            </div>
            <div className="ledger-player">
                Player 2 is <div className="P2_shape m-l-20" />
            </div>
            <div className="ledger-player">
                Player 3 is <div className="P3_shape m-l-20" />
            </div>
            <div className="ledger-player">
                Player 4 is <div className="P4_shape m-l-20" />
            </div>
            <button className="back btn"><Link to="/games">Back To Home</Link></button>
        </div>
    );
};
