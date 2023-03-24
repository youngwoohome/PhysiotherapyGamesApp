import React from "react";
import "./AboutUs.css";
import { Image } from "@fluentui/react-northstar";

export function AppInfo() {
  return (
    <div className="appinfo page">
      <h2>Instructions</h2>
      <br></br>
      <span>The supported gestures for games are as follows:</span>
      <br></br>
      <ul>
          <div>
            <li>Two Finger Click</li>
            <img className="gif img" src="fingerclick.gif" />
          </div>
          <div>
            <li>Punching Clicking</li>
            <img className="gif img" src="punch.gif" />
          </div>
          <div>
            <li>Wrist control. Use 1 hand to move the cursor and the other hand to click</li>
            <img className="gif img" src="wristtrack.gif" />
          </div>
          <div>
            <li>Other clicking motions</li>
            <img className="gif img" src="gunfinger.gif" />
          </div>
          {/* <li>Facial tracking and leg tracking is also supported in MotionInput. There's so much scope to exercise!</li> */}
      </ul>  

      <p>Facial tracking, leg tracking and other movements are supported in MotionInput. There's so many things to exercise!</p>
      <br></br><br></br>
      <p>
          Many body parts can be used once you start playing a game.
          Some games require clicking in certain positions of the screen. Whereas others, only need 
          a general click. Whilst other games need smooth, dragged movements. 
      </p>    
      <p>
          Game specific instructions are available for all games!
      </p>
    </div>
  );
}
