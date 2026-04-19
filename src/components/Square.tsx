import './Square.css';
import { Player } from '../utils/gameUtils';

interface SquareProps {
  value: Player;
  onSquareClick: () => void;
  isWinning?: boolean;
}

const Square = ({ value, onSquareClick, isWinning = false }: SquareProps) => {
  return (
    <button
      className={`square ${isWinning ? 'winning' : ''}`}
      onClick={onSquareClick}
      aria-label={`Square ${value ? `containing ${value}` : 'empty'}`}
    >
      {value}
    </button>
  );
};

export default Square;
