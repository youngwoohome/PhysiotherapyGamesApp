// import "./Duckhunt.css";
// import { Image } from "@fluentui/react-northstar";
// const duck = document.querySelector('#duck');

// //Add click event
// duck.addEventListener('click', ()=> {
//   increaseScore();
//   moveDuck();
// });

// //Increase score by 1
// const increaseScore = () => {
//   //Get the content of the target element. The current value for score
//   const score = document.querySelector("#score-counter").innerHTML;
//   //Get the element to increase the value
//   const scoreHTML = document.querySelector("#score-counter");
//   //Cast the score value to Number
//   let count = Number(score);
//   //Set the new score to the target element
//   scoreHTML.innerHTML = count + 1;
// };

// //Get a Random number
// const getRandomNum = (num) => {
//   return Math.floor(Math.random() * Math.floor(num));
// }
// /*
// Move the duck randomly 
// */
// const moveDuck = () => {
//   const w = 700;
//   const h = 700;  
//   duck.style.top = getRandomNum(w) + 'px';
//   duck.style.left = getRandomNum(h) + 'px';
   
// }

// export default function Duckhunt() {
//     return (
//         <div class="container">
//             <Image src='Duckhuntbackground.png' />
//             <Image id="duck" src='Duck.png' />
//             <div class='scoreContainer'>
//                 <div id="score-text">Score</div>
//             <   div id="score-counter">0</div>
//             </div>
//         </div>
//     );
// }



import React, { useState } from "react";
import "./Duckhunt.css";
import { Link } from 'react-router-dom';

function DuckGame() {
  const [score, setScore] = useState(0);

  function increaseScore() {
    setScore(score + 1);
  }

  function moveDuck() {
    // const w = window.innerWidth;
    // const h = window.innerHeight;
    const w = 500
    const h = 500
    const duck = document.querySelector("#duck");
    duck.style.top = getRandomNum(w) + "px";
    duck.style.left = getRandomNum(h) + "px";
  }

  function getRandomNum(num) {
    return Math.floor(Math.random() * Math.floor(num));
  }

  return (
    <div className="duckhunt-container">
      <img id="duckhunt-img" src="Duckhuntbackground.png" alt="background" />
      <img
        id="duck"
        src="Duck.png"
        alt="duck"
        onClick={() => {
          increaseScore();
          moveDuck();
        }}
      />
      <div className="duckhunt-scoreContainer">
        <div id="duckhunt-score-text">Score</div>
        <div id="duckhunt-score-counter">{score}</div>
      </div>
      <div>
        <button id="duckhunt-exit" className="back btn"><Link to="/games">Back To Home</Link></button>
      </div>
    </div>
  );
}

export default DuckGame;
