import React, { useState } from "react";
import { Menu } from "@fluentui/react-northstar";
import "./Welcome.css";
import { About } from "./AboutUs";
import { AppInfo } from "./AppInfo";
import { Link } from "react-router-dom";

// The inital page of the application that renders inside the meeting
export function Welcome(props) {

  const steps = ["about", "info"];
  const friendlyStepsName = {
    about: "About Us",
    info: "App Info",
  };
  const [selectedMenuItem, setSelectedMenuItem] = useState("about");
  const items = steps.map((step) => {
    return {
      key: step,
      content: friendlyStepsName[step] || "",
      onClick: () => setSelectedMenuItem(step),
    };
  });

  return (
    <div className="welcome page">
      <h1 className="center header">UCL Motioninput Physiotherapy</h1>
      <p className="center subheader">In Collaboration With The Microsoft Team in Redmond</p>
      <p className="center subheader">Developed by Adil</p>
      <div className="narrow page-padding">
        <button className="center btn"><Link to="/games">Get Started</Link></button>

        <Menu defaultActiveIndex={0} items={items} underlined secondary />
        <div className="sections">
          {selectedMenuItem === "about" && (
            <div>
              <About />
            </div>
          )}
          {selectedMenuItem === "info" && (
            <div>
              <AppInfo />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
