import drawBoard from "./drawBoard.js";
import drawNextBoard from "./drawNextBoard.js";

const animateBoard = (board, ctx, cellResolution) => {
  board = drawNextBoard(board);
  drawBoard(board, ctx, cellResolution);
  requestAnimationFrame(animateBoard(board));
};

export default animateBoard;
