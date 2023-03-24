import "./Reversi.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

function Square(props) {
    return (
        <button className="reversi-square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i, j) {
        return (
            <Square
                value={this.props.squares[i][j]}
                onClick={() => this.props.onClick(i, j)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="reversi-col-index-container">
                    <div className="reversi-col-index">a</div>
                    <div className="reversi-col-index">b</div>
                    <div className="reversi-col-index">c</div>
                    <div className="reversi-col-index">d</div>
                    <div className="reversi-col-index">e</div>
                    <div className="reversi-col-index">f</div>
                    <div className="reversi-col-index">g</div>
                    <div className="reversi-col-index">h</div>
                </div>
                <div className="reversi-board-row">
                    <div className="reversi-row-index">1</div>
                    {this.renderSquare(0, 0)}
                    {this.renderSquare(0, 1)}
                    {this.renderSquare(0, 2)}
                    {this.renderSquare(0, 3)}
                    {this.renderSquare(0, 4)}
                    {this.renderSquare(0, 5)}
                    {this.renderSquare(0, 6)}
                    {this.renderSquare(0, 7)}
                </div>
                <div className="reversi-board-row">
                    <div className="reversi-row-index">2</div>
                    {this.renderSquare(1, 0)}
                    {this.renderSquare(1, 1)}
                    {this.renderSquare(1, 2)}
                    {this.renderSquare(1, 3)}
                    {this.renderSquare(1, 4)}
                    {this.renderSquare(1, 5)}
                    {this.renderSquare(1, 6)}
                    {this.renderSquare(1, 7)}
                </div>
                <div className="reversi-board-row">
                    <div className="reversi-row-index">3</div>
                    {this.renderSquare(2, 0)}
                    {this.renderSquare(2, 1)}
                    {this.renderSquare(2, 2)}
                    {this.renderSquare(2, 3)}
                    {this.renderSquare(2, 4)}
                    {this.renderSquare(2, 5)}
                    {this.renderSquare(2, 6)}
                    {this.renderSquare(2, 7)}
                </div>
                <div className="reversi-board-row">
                    <div className="reversi-row-index">4</div>
                    {this.renderSquare(3, 0)}
                    {this.renderSquare(3, 1)}
                    {this.renderSquare(3, 2)}
                    {this.renderSquare(3, 3)}
                    {this.renderSquare(3, 4)}
                    {this.renderSquare(3, 5)}
                    {this.renderSquare(3, 6)}
                    {this.renderSquare(3, 7)}
                </div>
                <div className="reversi-board-row">
                    <div className="reversi-row-index">5</div>
                    {this.renderSquare(4, 0)}
                    {this.renderSquare(4, 1)}
                    {this.renderSquare(4, 2)}
                    {this.renderSquare(4, 3)}
                    {this.renderSquare(4, 4)}
                    {this.renderSquare(4, 5)}
                    {this.renderSquare(4, 6)}
                    {this.renderSquare(4, 7)}
                </div>
                <div className="reversi-board-row">
                    <div className="reversi-row-index">6</div>
                    {this.renderSquare(5, 0)}
                    {this.renderSquare(5, 1)}
                    {this.renderSquare(5, 2)}
                    {this.renderSquare(5, 3)}
                    {this.renderSquare(5, 4)}
                    {this.renderSquare(5, 5)}
                    {this.renderSquare(5, 6)}
                    {this.renderSquare(5, 7)}
                </div>
                <div className="reversi-board-row">
                    <div className="reversi-row-index">7</div>
                    {this.renderSquare(6, 0)}
                    {this.renderSquare(6, 1)}
                    {this.renderSquare(6, 2)}
                    {this.renderSquare(6, 3)}
                    {this.renderSquare(6, 4)}
                    {this.renderSquare(6, 5)}
                    {this.renderSquare(6, 6)}
                    {this.renderSquare(6, 7)}
                </div>
                <div className="reversi-board-row">
                    <div className="reversi-row-index">8</div>
                    {this.renderSquare(7, 0)}
                    {this.renderSquare(7, 1)}
                    {this.renderSquare(7, 2)}
                    {this.renderSquare(7, 3)}
                    {this.renderSquare(7, 4)}
                    {this.renderSquare(7, 5)}
                    {this.renderSquare(7, 6)}
                    {this.renderSquare(7, 7)}
                </div>
            </div>
        );
    }
}

export default class Game extends React.Component {
    constructor() {
        super();
        const squares = [];
        for (let i = 0; i < 8; i++) {
            squares.push(Array(8).fill(null));
        }
        squares[3][3] = "O";
        squares[3][4] = "X";
        squares[4][3] = "X";
        squares[4][4] = "O";
        this.state = {
            history: [
                {
                    squares: squares,
                    col: null,
                    row: null,
                    xScore: 2,
                    oScore: 2,
                    jumpNext: false
                }
            ],
            stepNumber: 0,
            xIsNext: true
        };
    }

    handleClick(i, j) {
        let history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = [];
        for (let k = 0; k < current.squares.length; k++) {
            squares.push(current.squares[k].slice());
        }
        if (squares[i][j] || !turnAllStones(squares, this.state.xIsNext, i, j)) {
            return;
        }
        squares[i][j] = this.state.xIsNext ? "X" : "O";
        const count = countXO(squares);
        let xIsNext = !this.state.xIsNext;
        history = history.concat([
            {
                squares: squares,
                col: ["a", "b", "c", "d", "e", "f", "g", "h"][j],
                row: i + 1,
                xScore: count.xCount,
                oScore: count.oCount,
                jumpNext: false
            }
        ])
        if (!searchValidSquares(squares, xIsNext) && searchValidSquares(squares, !xIsNext)) {
            xIsNext = !xIsNext;
            history[history.length - 1].jumpNext = true;
            history = history.concat([
                {
                    squares: squares,
                    col: "pass",
                    row: "",
                    xScore: count.xCount,
                    oScore: count.oCount,
                    jumpNext: false
                }
            ]);
        }
        this.setState({
            history: history,
            stepNumber: history.length - 1,
            xIsNext: xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 ? false : true
        });
    }

    componentDidUpdate() {
        const node = ReactDOM.findDOMNode(this.moveEnd);
        node.scrollIntoView();
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares, this.state.xIsNext);
        const moves = history.map((step, move) => {
            let desc;
            if (move) {
                desc = (move % 2 ? "X" : "O") + " " + step.col + step.row
            } else {
                desc = "Start"
            }
            if (step.col !== "pass") {
                desc += " (X" + step.xScore + "/O" + step.oScore + ")";
            }
            let jumpTo = move;
            if (step.jumpNext) {
                jumpTo++;
            }
            return (
                <li key={move}>
                    <a href="#" onClick={() => this.jumpTo(jumpTo)}>{desc}</a>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        return (
            <div className="reversi-game">
                <div className="reversi-game-board">
                    <h1>Reversi</h1>
                    <Board
                        squares={current.squares}
                        onClick={(i, j) => this.handleClick(i, j)}
                    />
                    <br></br>
                    <button className="back btn"><Link to="/games">Back To Home</Link></button>
                </div>
                <div className="reversi-game-info">
                    <br></br><br></br>
                    <div>{status}</div>
                    <div className="reversi-move-container">
                        <ol>{moves}</ol>
                        <div ref={(el) => { this.moveEnd = el; }}></div>
                    </div>
                </div>
            </div>
        );
    }
}

// ========================================

// ReactDOM.render(<Game />, document.getElementById("root"));

function turnAllStones(squares, xIsNext, row, col) {
    if (turnLineStones(squares, xIsNext, row, col, -1, -1) |
        turnLineStones(squares, xIsNext, row, col, -1, 0) |
        turnLineStones(squares, xIsNext, row, col, -1, 1) |
        turnLineStones(squares, xIsNext, row, col, 0, -1) |
        turnLineStones(squares, xIsNext, row, col, 0, 1) |
        turnLineStones(squares, xIsNext, row, col, 1, -1) |
        turnLineStones(squares, xIsNext, row, col, 1, 0) |
        turnLineStones(squares, xIsNext, row, col, 1, 1)) {
        return true;
    }
    return false;
}

function turnLineStones(squares, xIsNext, row, col, addRow, addCol) {
    let rowCount = addRow;
    let colCount = addCol;
    let indexes = [];
    while ((-1 < row - rowCount) && (8 > row - rowCount) &&
        (-1 < col - colCount) && (8 > col - colCount)) {
        const square = squares[row - rowCount][col - colCount];
        if (square === null) {
            return false;
        }
        if ((xIsNext && square === "X") || (!xIsNext && square === "O")) {
            if (rowCount !== addRow || colCount !== addCol) {
                turnStones(squares, indexes, xIsNext);
                return true;
            }
            return false;
        }
        indexes.push([row - rowCount, col - colCount]);
        rowCount += addRow;
        colCount += addCol;
    }
    return false;
}

function turnStones(squares, indexes, xIsNext) {
    for (let i = 0; i < indexes.length; i++) {
        const index = indexes[i];
        if (xIsNext) {
            squares[index[0]][index[1]] = "X";
        } else {
            squares[index[0]][index[1]] = "O";
        }
    }
}

function searchValidSquares(squares, xIsNext) {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (squares[i][j] !== null) continue;
            if (isValidSquare(squares, xIsNext, i, j)) {
                return true;
            }
        }
    }
    return false;
};

function isValidSquare(squares, xIsNext, row, col) {
    if (isValidLine(squares, xIsNext, row, col, -1, -1) ||
        isValidLine(squares, xIsNext, row, col, -1, 0) ||
        isValidLine(squares, xIsNext, row, col, -1, 1) ||
        isValidLine(squares, xIsNext, row, col, 0, -1) ||
        isValidLine(squares, xIsNext, row, col, 0, 1) ||
        isValidLine(squares, xIsNext, row, col, 1, -1) ||
        isValidLine(squares, xIsNext, row, col, 1, 0) ||
        isValidLine(squares, xIsNext, row, col, 1, 1)) {
        return true;
    }
    return false;
};

function isValidLine(squares, xIsNext, row, col, addRow, addCol) {
    let rowCount = addRow;
    let colCount = addCol;
    while ((-1 < row - rowCount) && (8 > row - rowCount) &&
        (-1 < col - colCount) && (8 > col - colCount)) {
        const square = squares[row - rowCount][col - colCount];
        if (square === null) {
            return false;
        }
        if ((xIsNext && square === "X") || (!xIsNext && square === "O")) {
            if (rowCount === addRow && colCount === addCol) {
                return false;
            } else {
                return true;
            }
        }
        rowCount += addRow;
        colCount += addCol;
    }
    return false;
};

function calculateWinner(squares, xIsNext) {
    const count = countXO(squares);
    if (!searchValidSquares(squares, xIsNext)) {
        return winner(count.xCount, count.oCount);
    }
    return null;
}

function winner(xCount, oCount) {
    if (xCount > oCount) {
        return "X";
    } else if (xCount < oCount) {
        return "O";
    } else {
        return "Draw";
    }
}

function countXO(squares) {
    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (squares[i][j] === "X") {
                xCount++;
            } else if (squares[i][j] === "O") {
                oCount++;
            }
        }
    }
    return { xCount: xCount, oCount: oCount };
}
