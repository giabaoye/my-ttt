import './GameHistory.css';
import { BoardState } from '../utils/gameUtils';

interface GameHistoryProps {
  history: BoardState[];
  currentMove: number;
  onJumpTo: (move: number) => void;
}

const GameHistory = ({ history, currentMove, onJumpTo }: GameHistoryProps) => {
  const moves = history.map((_squares, move) => {
    const isCurrentMove = move === currentMove;
    let description;

    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = 'Go to game start';
    }

    return (
      <li key={move} className='history-item'>
        <button
          className={`history-button ${isCurrentMove ? 'current' : ''}`}
          onClick={() => onJumpTo(move)}
          aria-current={isCurrentMove ? 'true' : 'false'}
          disabled={isCurrentMove}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className='game-history'>
      <h3 className='history-title'>Game History</h3>
      <div className='history-list-container'>
        <ol className='history-list' aria-label='Game history'>
          {moves}
        </ol>
      </div>
    </div>
  );
};

export default GameHistory;
