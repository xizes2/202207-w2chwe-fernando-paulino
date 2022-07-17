import findNeighbors from "../logic-functions/findNeighbours.js";
import neighboursAliveAmount from "../logic-functions/neighboursAliveAmount.js";

const drawNextBoard = (board) => {
  const nextBoard = board.map((line) => {
    return [...line];
  });

  for (let line = 0; line < board.length; line++) {
    for (let element = 0; element < board[line].length; element++) {
      const cell = board[element][line];
      const neighbours = findNeighbors(board, element, line);
      const neighboursAmount = neighboursAliveAmount(neighbours);

      if (cell === 1 && neighboursAmount < 2) {
        nextBoard[element][line] = 0;
      } else if (
        (cell === 1 && neighboursAmount === 2) ||
        (cell === 1 && neighboursAmount === 3)
      ) {
        nextBoard[element][line] = 1;
      } else if (cell === 1 && neighboursAmount > 3) {
        nextBoard[element][line] = 0;
      }
      if (cell === 0 && neighboursAmount === 3) {
        nextBoard[element][line] = 1;
      }
    }
  }

  return nextBoard;
};

export default drawNextBoard;
