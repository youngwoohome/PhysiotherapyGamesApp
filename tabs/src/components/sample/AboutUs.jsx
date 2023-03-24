import React from "react";
import "./AboutUs.css";
import { Image } from "@fluentui/react-northstar";

export function About(){

  return (
    <div className="about page">
      <h2>Who are we?</h2>
      <p>
        We are a group of UCL students with a joint aim - to make physiotherapy easier and more enjoyable.
        Fueled by our passion for innovation and a strong desire to make a difference this project was perfect
        to allow us to test our creativity and problem-solving skills.
      </p>
      <Image className="img" src='TeamIntro.png'/>
      <p>
        For months we have been working on a culmination of games, gestures and an amazing API in Microsoft Teams
        which allows users to seamlessly play MotionInput games whilst on a call.
      </p>

      <br></br>
      <h2>Our focus</h2>
      <p>
        We believe current physiotherapy methods need to be more accessible and enjoyable for patients. 
        As a group of driven students, we have created a platform that aims to revolutionise online physiotherapy.
        Whether it's developing new exercises, designing user-friendly interfaces, we wish to help patients reach
        their rehabilitation goals.
        This App will work towards making physiotherapy a fun and accessible experience for everyone.
        And with the support of our professors and mentors, we're confident that we can make a lasting impact 
        in the world of online physiotherapy.
      </p>
    </div>
  );
}
