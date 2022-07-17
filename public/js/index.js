import GameOfLifeBoard from "./classes/GameOfLifeBoard.js";
import drawBoard from "./draw-functions/drawBoard.js";
import drawNextBoard from "./draw-functions/drawNextBoard.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const cellResolution = 30;
canvas.width = 200;
canvas.height = 200;
const numberOfLines = canvas.width / cellResolution;
const numberOfColumns = canvas.height / cellResolution;

let gameBoard = new GameOfLifeBoard(
  numberOfLines,
  numberOfColumns
).createBoard();

const animateBoard = () => {
  gameBoard = drawNextBoard(gameBoard);
  drawBoard(gameBoard, ctx, cellResolution);
  requestAnimationFrame(animateBoard());
};
