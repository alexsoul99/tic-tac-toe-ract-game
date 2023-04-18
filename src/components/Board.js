import Square from "./Square"
import './Board.css'

export default function Board({ xIsNext, squares, onPlay }) {
    const createSquares = values => {
        return values.map((value) => (
            <Square value={squares[value]} onSquareClick={() => handleClick(value)} key={value} />
        ))
    }

    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares)
    }

    const winner = calculateWinner(squares);

    let status;

    if (winner === null) {
        status = "It's a draw"
    } else if (winner) {
        status = "Winner: " + winner
    } else {
        status = "Your turn: " + (xIsNext ? "X" : "O");
    }

    return (
        <>
            <hr className="separator" />
            <div className="status">{status}</div>
            <div className="board-row">
                {createSquares([0, 1, 2])}
            </div>
            <div className="board-row">
                {createSquares([3, 4, 5])}
            </div>
            <div className="board-row">
                {createSquares([6, 7, 8])}
            </div>
        </>
    )
}


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    if (!squares.includes(null)) {
        return null
    }
}

