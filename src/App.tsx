import Board from './components/Board';
import GameHistory from './components/GameHistory';
import ResetButton from './components/ResetButton';
import { useGameState } from './hooks/useGameState';
import './App.css';

function App() {
  const {
    history,
    currentMove,
    currentSquares,
    xIsNext,
    handlePlay,
    jumpTo,
    resetGame,
  } = useGameState();

  return (
    <div className='game'>
      <header className='game-header'>
        <h1 className='game-title'>Tic Tac Toe</h1>
      </header>

      <main className='game-main'>
        <div className='game-board-section'>
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
          <ResetButton onReset={resetGame} />
        </div>

        <aside className='game-info'>
          <GameHistory
            history={history}
            currentMove={currentMove}
            onJumpTo={jumpTo}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
