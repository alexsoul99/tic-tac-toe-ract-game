import './Square.css'

function Square({ value, onSquareClick }) {
  return (
    <button className={`square ${value === 'X' ? 'square-x' : value === 'O' ? 'square-o' : ''} `} onClick={onSquareClick} />
  );
}

export default Square;
