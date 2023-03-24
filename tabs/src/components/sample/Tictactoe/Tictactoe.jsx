import React from "react";
import { Link } from 'react-router-dom';
import { app, FrameContexts } from "@microsoft/teams-js";

import './Tictactoe.css';
import './WhosNext.scss';
import FluidService from "../../../services/fluidLiveShare"


function Square({ value, onSquareClick }) {
  return (
    <button className="tictactoesquare" onClick={onSquareClick}>      
    {value}
    </button>  );
}

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && (squares[c]=='X' || squares[c]=='O')) {
      return squares[a];
    }
  }
  return false;
}

// Array to be shared between clients: holds value for each square
function getBoard(squares) {
  let squareContents = ['','','','','','','','','']
  for (let i in squares) {
    const symbol = squares[i][0]
    const idx = squares[i][2]
    squareContents[idx] = symbol
  }
  return squareContents
}

// intialising board
function Board({squares, handleClick}) {
  const board = getBoard(squares) // converts squares to array of moves
  return (
    <>
      <div className="tictactoe-board-row">        
      <Square value={board[0]} onSquareClick={() => handleClick(0, squares)} />        
      <Square value={board[1]} onSquareClick={() => handleClick(1, squares)} />        
      <Square value={board[2]} onSquareClick={() => handleClick(2, squares)} />      
      </div>      
      <div className="tictactoe-board-row">        
      <Square value={board[3]} onSquareClick={() => handleClick(3, squares)} />        
      <Square value={board[4]} onSquareClick={() => handleClick(4, squares)} />        
      <Square value={board[5]} onSquareClick={() => handleClick(5, squares)} />      
      </div>      
      <div className="tictactoe-board-row">        
      <Square value={board[6]} onSquareClick={() => handleClick(6, squares)} />        
      <Square value={board[7]} onSquareClick={() => handleClick(7, squares)} />        
      <Square value={board[8]} onSquareClick={() => handleClick(8, squares)} />      
      </div>    </>  );
}


class TictactoeTab extends React.Component {
  // initialising local fluid state
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      message: 'Connecting to Fluid service...',
      userName: '',
      addedName: '',
      people: []
    };

    this.boardClick = this.boardClick.bind(this);
  }

  componentDidMount() { // Rendering content inside before the html

    app.initialize().then(async () => {

      try {
        
        const context = await app.getContext(); //get all of the info e.g., url, teams username, etc.
        const userName = context?.user?.userPrincipalName.split('@')[0]; //

        // Attempt to connect to the Fluid relay service
        await FluidService.connect(); // connecting the fluid service 
        const people = await FluidService.getMovesList(); // waiting for a change in getMovesList from other clients
       
        
        this.setState({ // update local state if any changes detected from other clients
          ready: true,
          message: "",
          userName: userName,
          people: people
        });

        // Register an event handler to update state when fluid data changes
        FluidService.onNewData((people) => { 
          const symbol = people.length % 2 == 0? 'X':'O'
          const nextMove = symbol == 'X' ? 'X': 'O'
          this.setState({ // Updating the message state
            ready: true,
            people: people,
            message: "next move: "+nextMove
          });
        });

      } catch (error) {

        this.setState({
          ready: false,
          message: `ERROR: ${error.message}`
        });

      }
    });

  }


  boardClick = async (i, squares) => { 
    const board = getBoard(squares)
    const winner = calculateWinner(board)
    if (winner) {
      this.setState({ // if winner exists the local state is set to the winner
        message: "Winner is: " + winner
      });
      return
    }
    if (board[i]=='X'|| board[i]=='O') { // if theres a value inside the square already then dont execute rest of function
      return
    }
 
    const symbol = squares.length % 2 == 0? 'X':'O' // deciding which letter is next
    const move = symbol+'-'+i 

    try {
      await FluidService.addSquareandMove(move); //share this with another client. call fluid and add to shared array in the fluid service

    } catch (error) {
      this.setState({ message: error.message });
    }

  }

  render() {
    const { ready, addedName, message, people, userName } = this.state;

    return (
      <div className="speaker-list">


        <h1>Tic Tac Toe</h1>
        
        { ready && ( // tells local state that its ready 

          <>
            <Board squares={people} handleClick={this.boardClick}/>

            <p>{message}</p>

            <button className="tictactoe-restart" type="submit" onClick={async () => {
              try {
                await FluidService.resetGame();
                this.setState({ addedName: "", message: "" });
              } catch (error) {
                this.setState({ message: error.message });
              }
            }}>Restart</button>
            <br></br>
            <button className="back btn"><Link to="/games">Back To Home</Link></button>
          </>
        )
        }
      </div>
    );
  }
}

export default TictactoeTab;
