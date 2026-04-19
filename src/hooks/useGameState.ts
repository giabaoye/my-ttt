import { useState, useCallback } from 'react';
import { createEmptyBoard, BoardState } from '../utils/gameUtils';

export const useGameState = () => {
  const [history, setHistory] = useState<BoardState[]>([createEmptyBoard()]);
  const [currentMove, setCurrentMove] = useState<number>(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = useCallback(
    (nextSquares: BoardState) => {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    },
    [history, currentMove]
  );

  const jumpTo = useCallback((nextMove: number) => {
    setCurrentMove(nextMove);
  }, []);

  const resetGame = useCallback(() => {
    setHistory([createEmptyBoard()]);
    setCurrentMove(0);
  }, []);

  return {
    history,
    currentMove,
    currentSquares,
    xIsNext,
    handlePlay,
    jumpTo,
    resetGame,
  };
};
