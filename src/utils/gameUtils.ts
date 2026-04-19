export type Player = 'X' | 'O' | null;
export type BoardState = Player[];

export interface WinnerInfo {
  winner: Player;
  winningLine: number[] | null;
}

export const calculateWinner = (squares: BoardState): WinnerInfo => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winningLine: lines[i] };
    }
  }

  return { winner: null, winningLine: null };
};

export const isDraw = (squares: BoardState): boolean => {
  return !calculateWinner(squares).winner && squares.every((square) => square !== null);
};

export const getNextPlayer = (moveCount: number): 'X' | 'O' => {
  return moveCount % 2 === 0 ? 'X' : 'O';
};

export const createEmptyBoard = (): BoardState => Array(9).fill(null);
