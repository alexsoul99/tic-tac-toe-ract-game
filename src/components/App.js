import { useState } from "react";
import Board from "./Board";
import './App.css'

export default function Game() {
	const [squares, setSquares] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const xIsNext = currentMove % 2 === 0;
	const currentSquares = squares[currentMove];

	function handelPlay(nextSquares) {
		const newSquares = [...squares.slice(0, currentMove + 1), nextSquares];
		setSquares(newSquares);
		setCurrentMove(newSquares.length - 1);
	}

	return (
		<div className="game align">
			<div className="game-board align">
				<h2 className="text">Want Some Battle?</h2>
				<h3 className="text"> Let's Play Tic Tac Toe</h3>
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handelPlay} currentMove={currentMove} />
			</div>
		</div>
	)
}
