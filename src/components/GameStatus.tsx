import './GameStatus.css';
import { Player } from '../utils/gameUtils';

interface GameStatusProps {
  winner: Player;
  isDraw: boolean;
  xIsNext: boolean;
}

const GameStatus = ({ winner, isDraw, xIsNext }: GameStatusProps) => {
  let status;
  let statusClass = '';

  if (winner) {
    status = `🎉 Winner: ${winner}`;
    statusClass = 'winner';
  } else if (isDraw) {
    status = "🤝 It's a draw!";
    statusClass = 'draw';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    statusClass = 'next-player';
  }

  return (
    <div className={`status ${statusClass}`} role='status' aria-live='polite'>
      {status}
    </div>
  );
};

export default GameStatus;
