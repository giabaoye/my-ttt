import Square from './Square';
import GameStatus from './GameStatus';
import { calculateWinner, BoardState } from '../utils/gameUtils';
import './Board.css';

interface BoardProps {
  xIsNext: boolean;
  squares: BoardState;
  onPlay: (nextSquares: BoardState) => void;
}

const Board = ({ xIsNext, squares, onPlay }: BoardProps) => {
  const handleClick = (i: number) => {
    if (calculateWinner(squares).winner || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  };

  const { winner, winningLine } = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);

  const renderSquare = (i: number) => (
    <Square
      key={i}
      value={squares[i]}
      onSquareClick={() => handleClick(i)}
      isWinning={winningLine ? winningLine.includes(i) : false}
    />
  );

  return (
    <div className='board-container'>
      <GameStatus winner={winner} isDraw={isDraw} xIsNext={xIsNext} />

      <div className='board' role='grid' aria-label='Tic tac toe board'>
        <div className='board-row' role='row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row' role='row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row' role='row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};

export default Board;
