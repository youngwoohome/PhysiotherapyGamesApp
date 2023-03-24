import React, { useState } from "react";
import Modal from "./Modals/Modal";
import "./Games.css";
import { Image } from "@fluentui/react-northstar";
import { Link } from "react-router-dom";

// Page with the selection of games and the respective info on each game

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}


const spaceControl = 'This game is controlled using the SPACE BAR';
const spaceBody = 'Most motions can be used to play this game. We recommend using the punching gesture!';
const arrowControl = 'This game is collrolled using the ARROW KEYS';
const arrowBody = 'Arm and Leg tracking can be used for this game. Enjoy!';
const mouseControl = 'This game is controlled using the MOUSE CURSOR.';
const mouseBody = 'Hand, wrist and facial tracking are a few of the many motions that can be used in this game! ';

export function Games() {
  
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenFlappy, setIsOpenFlappy] = useState(false)
  const [isOpenKinect, setIsOpenKinect] = useState(false)
  const [isOpenDuck, setIsOpenDuck] = useState(false)
  const [isOpensnakeandladder, setIsOpensnakeandaldder] = useState(false)
  const [isOpenReversi, setIsOpenReversi] = useState(false)
  const [isOpenMinesweeper, setIsOpenMinesweeper] = useState(false)
  const [isOpenSnake, setIsOpenSnake] = useState(false)
  const [isOpenTetris, setIsOpenTetris] = useState(false)
  const [isOpenWackamole, setIsOpenWackamole] = useState(false)


  return (
    <div className="games page">
        <h1>Choose From the Following Selection Of Games</h1>
        <h4>All Games Must Be Shared To Stage To Play Unless States Otherwise</h4>
        <p><button className="back-to-start btn"><Link to="/welcome">Back To Start</Link></button></p>
        <br></br><br></br><br></br><br></br>

        <div className="gameselection">

          <div>
            <Image className="icon" src="tictactoe.png" />
            <span><h3>Tic-Tac-Toe</h3></span>
            <h5>Collaborative Play but ONLY in Meeting Side-Panel</h5>
            <span><button className="link btn"><Link to="/tictactoe">Play Now</Link></button></span>
      
            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
              <button className="openmodalbutton" onClick={() => setIsOpen(true)}>Game Info</button>
              <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <span><h3>Collaborative Play but ONLY in Meeting Side-Panel</h3></span>
                <p><u>Difficulty:</u> Easy ⭐️</p>
                <p><u>Type:</u> Multi Player</p>
                <p><u>Controls:</u> {mouseControl}</p>
                <p><u>Body Parts:</u> {mouseBody}</p>
              </Modal>
            </div>
          </div>


          <div>
            <Image className="icon" src="snakegame.jpeg" />
            <span><h3>Snake</h3></span>
            <span><button className="link btn"><Link to="/snake">Play Now</Link></button></span>

            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
              <button className="openmodalbutton" onClick={() => setIsOpenSnake(true)}>Game Info</button>
              <Modal open={isOpenSnake} onClose={() => setIsOpenSnake(false)}>
                <p><u>Difficulty:</u> `Extremely Hard ⭐️⭐️⭐️⭐️⭐️</p>
                <p><u>Type:</u> Single Player</p>
                <p>2 Potential Different Controls, Choose Desired:</p>
                <p><u>1. Controls:</u> {arrowControl}</p>
                <p><u>Body Parts:</u> {arrowBody}</p>
                <br></br>
                <p><u>2. Controls:</u> {mouseControl}</p>
                <p><u>Body Parts:</u> {mouseBody}</p>
              </Modal>
            </div>
          </div>


          <div>
            <Image className="icon" src="wackamole.png" />
            <span><h3>Whack-A-Mole</h3></span>
            <span><button className="link btn"><Link to="/wackamole">Play Now</Link></button></span>

            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
              <button className="openmodalbutton" onClick={() => setIsOpenWackamole(true)}>Game Info</button>
              <Modal open={isOpenWackamole} onClose={() => setIsOpenWackamole(false)}>
                <p><u>Difficulty:</u> Very Hard ⭐️⭐️⭐️⭐️</p>
                <p><u>Type:</u> Single Player</p>
                <p><u>Controls:</u> {mouseControl}</p>
                <p><u>Body Parts:</u> {mouseBody}</p>
              </Modal>
            </div>
          </div>


          <div>
            <Image className="icon" src="tetris.png" />
            <span><h3>Tetris</h3></span>
            <span><button className="link btn"><Link to="/tetris">Play Now</Link></button></span>

            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
              <button className="openmodalbutton" onClick={() => setIsOpenTetris(true)}>Game Info</button>
              <Modal open={isOpenTetris} onClose={() => setIsOpenTetris(false)}>
                <p><u>Difficulty:</u> Medium ⭐️⭐️</p>
                <p>Exhausting exercise, but slow paced compared to Snake</p>
                <p><u>Type:</u> Single Player</p>
                <p><u>Controls:</u> {arrowControl}</p>
                <p><u>Body Parts:</u> {arrowBody}</p>
              </Modal>
            </div>
          </div>


          <div>
            <Image className="icon" src="Minesweeper.png" />
            <span><h3>Minesweeper</h3></span>
            <span><button className="link btn"><Link to="/minesweeper">Play Now</Link></button></span>

            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
              <button className="openmodalbutton" onClick={() => setIsOpenMinesweeper(true)}>Game Info</button>
              <Modal open={isOpenMinesweeper} onClose={() => setIsOpenMinesweeper(false)}>
                <p><u>Difficulty:</u> Easy ⭐️</p>
                <p><u>Type:</u> Single Player</p>
                <p><u>Controls:</u> {mouseControl}</p>
                <p><u>Body Parts:</u> {mouseBody}</p>
              </Modal>
            </div>
          </div>


          <div>
            <Image className="icon" src="kinect4.jpeg" />
            <span><h3>Kinect 4</h3></span>
            <span><button className="link btn"><Link to="/kinect4">Play Now</Link></button></span>

            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
              <button className="openmodalbutton" onClick={() => setIsOpenKinect(true)}>Game Info</button>
              <Modal open={isOpenKinect} onClose={() => setIsOpenKinect(false)}>
                <p><u>Difficulty:</u> Easy ⭐️</p>
                <p><u>Type:</u> Multi Player</p>
                <p><u>Controls:</u> {mouseControl}</p>
                <p><u>Body Parts:</u> {mouseBody}</p>
              </Modal>
            </div>
          </div>

          <div>
            <Image className="icon" src="flappybird.png" />
            <span><h3>Flappy Bird</h3></span>
            <span><button className="link btn"><Link to="/flappybird">Play Now</Link></button></span>

            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
              <button className="openmodalbutton" onClick={() => setIsOpenFlappy(true)}>Game Info</button>
              <Modal open={isOpenFlappy} onClose={() => setIsOpenFlappy(false)}>
                <p><u>Difficulty:</u> Hard ⭐️⭐️⭐️</p>
                <p><u>Type:</u> Single Player</p>
                <p><u>Controls:</u> {spaceControl}</p>
                <p><u>Body Parts:</u> {spaceBody}</p>
              </Modal>
            </div>
          </div>


          {/* <div>
            <Image className="icon" src="kinect4.jpeg" />
            <span><h3>Kinect 4</h3></span>
            <span><button className="link btn"><Link to="/kinect4">Play Now</Link></button></span>
            
           <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
            <button className="openmodalbutton" onClick={() => setIsOpenKinect(true)}>Game Info</button>
            <Modal open={isOpenKinect} onClose={() => setIsOpenKinect(false)}>
              <p><u>Difficulty:</u> Easy ⭐️</p>
              <p><u>Type:</u> Multi Player</p>
              <p><u>Controls:</u> {mouseControl}</p>
              <p><u>Body Parts:</u> {mouseBody}</p>
            </Modal>
            </div>
          </div> */}


          <div>
            <Image className="icon" src="Duckhuntbackground.png" />
            <span><h3>Duck Hunt</h3></span>
            <span><button className="link btn"><Link to="/duckhunt">Play Now</Link></button></span>

            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
              <button className="openmodalbutton" onClick={() => setIsOpenDuck(true)}>Game Info</button>
              <Modal open={isOpenDuck} onClose={() => setIsOpenDuck(false)}>
                <p><u>Difficulty:</u> Easy ⭐️</p>
                <p><u>Type:</u> Single Player</p>
                <p><u>Controls:</u> {mouseControl}</p>
                <p><u>Body Parts:</u> {mouseBody}</p>
              </Modal>
            </div>
          </div>


          <div>
            <Image className="icon" src="ladder.jpg" />
            <span><h3>Snakes and Ladders</h3></span>
            <span><button className="link btn"><Link to="/snakesandladders">Play Now</Link></button></span>

            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
              <button className="openmodalbutton" onClick={() => setIsOpensnakeandaldder(true)}>Game Info</button>
              <Modal open={isOpensnakeandladder} onClose={() => setIsOpensnakeandaldder(false)}>
                <p><u>Difficulty:</u> Easy ⭐️</p>
                <p><u>Type:</u> Multi Player</p>
                <p><u>Controls:</u> {mouseControl}</p>
                <p><u>Body Parts:</u> {mouseBody}</p>
              </Modal>
            </div>
          </div>


          <div>
            <Image className="icon" src="Reversi.jpeg" />
            <span><h3>Reversi</h3></span>
            <span><button className="link btn"><Link to="/reversi">Play Now</Link></button></span>

            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
              <button className="openmodalbutton" onClick={() => setIsOpenReversi(true)}>Game Info</button>
              <Modal open={isOpenReversi} onClose={() => setIsOpenReversi(false)}>
                <p><u>Difficulty:</u> Easy ⭐️</p>
                <p><u>Type:</u> Multi Player</p>
                <p><u>Controls:</u> {mouseControl}</p>
                <p><u>Body Parts:</u> {mouseBody}</p>
              </Modal>
            </div>
          </div>


          {/* <div>
            <Image className="icon" src="Minesweeper.png" />
            <span><h3>Minesweeper</h3></span>
            <span><button className="link btn"><Link to="/minesweeper">Play Now</Link></button></span>

            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
              <button className="openmodalbutton" onClick={() => setIsOpenMinesweeper(true)}>Game Info</button>
              <Modal open={isOpenMinesweeper} onClose={() => setIsOpenMinesweeper(false)}>
                <p><u>Difficulty:</u> Easy ⭐️</p>
                <p><u>Type:</u> Single Player</p>
                <p><u>Controls:</u> {mouseControl}</p>
                <p><u>Body Parts:</u> {mouseBody}</p>
              </Modal>
            </div>
          </div> */}


          {/* <div>
            <Image className="icon" src="Solitaire.jpeg" />
            <span><h3>Solitaire</h3></span>
            <span><button className="link btn"><Link to="/solitaire">Play Now</Link></button></span>
          </div> */}


          {/* <div>
            <Image className="icon" src="snakegame.jpeg" />
            <span><h3>Snake</h3></span>
            <span><button className="link btn"><Link to="/snake">Play Now</Link></button></span>

            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
              <button className="openmodalbutton" onClick={() => setIsOpenSnake(true)}>Game Info</button>
              <Modal open={isOpenSnake} onClose={() => setIsOpenSnake(false)}>
                <p><u>Difficulty:</u> `Extremely Hard ⭐️⭐️⭐️⭐️⭐️</p>
                <p><u>Type:</u> Single Player</p>
                <p>2 Potential Different Controls, Choose Desired:</p>
                <p><u>1. Controls:</u> {arrowControl}</p>
                <p><u>Body Parts:</u> {arrowBody}</p>
                <br></br>
                <p><u>2. Controls:</u> {mouseControl}</p>
                <p><u>Body Parts:</u> {mouseBody}</p>
              </Modal>
            </div>
          </div> */}


          {/* <div>
            <Image className="icon" src="tetris.png" />
            <span><h3>Tetris</h3></span>
            <span><button className="link btn"><Link to="/tetris">Play Now</Link></button></span>

            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
              <button className="openmodalbutton" onClick={() => setIsOpenTetris(true)}>Game Info</button>
              <Modal open={isOpenTetris} onClose={() => setIsOpenTetris(false)}>
                <p><u>Difficulty:</u> Medium ⭐️⭐️</p>
                <p>Exhausting exercise, but slow paced compared to Snake</p>
                <p><u>Type:</u> Single Player</p>
                <p><u>Controls:</u> {arrowControl}</p>
                <p><u>Body Parts:</u> {arrowBody}</p>
              </Modal>
            </div>
          </div> */}


          {/* <div>
            <Image className="icon" src="wackamole.png" />
            <span><h3>Whack-A-Mole</h3></span>
            <span><button className="link btn"><Link to="/wackamole">Play Now</Link></button></span>

            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
              <button className="openmodalbutton" onClick={() => setIsOpenWackamole(true)}>Game Info</button>
              <Modal open={isOpenWackamole} onClose={() => setIsOpenWackamole(false)}>
                <p><u>Difficulty:</u> Very Hard ⭐️⭐️⭐️⭐️</p>
                <p><u>Type:</u> Single Player</p>
                <p><u>Controls:</u> {mouseControl}</p>
                <p><u>Body Parts:</u> {mouseBody}</p>
              </Modal>
            </div>
          </div> */}

        {/* onClick put the fluid service with route name inside brackets */}
        </div>
    </div>
  );
}
