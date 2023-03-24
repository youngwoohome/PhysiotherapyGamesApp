import React from "react";
// https://fluentsite.z22.web.core.windows.net/quick-start
import { Provider, teamsTheme } from "@fluentui/react-northstar";
import { HashRouter as Router, Redirect, Route } from "react-router-dom";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import Tab from "./Tab";
import "./App.css";
import TabConfig from "./TabConfig";
import { useTeams } from "@microsoft/teamsfx-react";
import { Welcome } from "./sample/Welcome";
// import { TicTacToeGame } from "./sample/Tictactoe/Tictactoe";
import { Games } from "./sample/Games";
import FlappyApp from "./sample/FlappyBird/FlappyBird";
import Kinect4 from "./sample/Kinect4/Kinect4";
import Duckgame from "./sample/Duckhunt/Duckhunt";
import Game from "./sample/Reversi/Reversi";
import Minesweeper from "./sample/Minesweeper/Game/Minesweeper";
import SnakesAndLadders from "./sample/SnakesandLadders/App";
// import Solitaire from "./sample/Solitaire/Solitaire"
import SnakeGame from "./sample/Snake/App";
import TetrisApp from "./sample/Tetris/Components/App";
import WackamoleApp from "./sample/WackaMole/App";
import TictactoeTab from "./sample/Tictactoe/Tictactoe";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  const { theme } = useTeams({})[0];
  return (
    <Provider theme={theme || teamsTheme} styles={{ backgroundColor: "#eeeeee" }}>
      <Router>
        <Route exact path="/">
          <Redirect to="/tab" />
        </Route>
        <>
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/termsofuse" component={TermsOfUse} />
          <Route exact path="/tab" component={Tab} />
          <Route exact path="/config" component={TabConfig} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/welcome" component={Welcome} />
          {/* <Route exact path="/tictactoe" component={TicTacToeGame} /> */}
          <Route exact path="/tictactoe" component={TictactoeTab} />
          <Route exact path="/flappybird" component={FlappyApp} />
          <Route exact path="/kinect4" component={Kinect4} />
          <Route exact path="/duckhunt" component={Duckgame} />
          <Route exact path="/reversi" component={Game} />
          <Route exact path="/minesweeper" component={Minesweeper} />
          <Route exact path="/snakesandladders" component={SnakesAndLadders} />
          {/* <Route exact path="/solitaire" component={Solitaire} /> */}
          <Route exact path="/snake" component={SnakeGame} />
          <Route exact path="/tetris" component={TetrisApp} />
          <Route exact path="/wackamole" component={WackamoleApp} />
        </>
      </Router>
    </Provider>
  );
}
