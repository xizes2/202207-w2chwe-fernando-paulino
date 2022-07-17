import GameOfLifeBoard from "./classes/GameOfLifeBoard.js";
import changeCellStatus from "./logic-functions/changeCellsStatus.js";

// const table = document.createElement("table");
// const text = document.createTextNode("pppp");
// table.appendChild(text);

// document.body.insertAdjacentElement();

const numberOfLines = 3;
const numberOfColumns = 3;

const gameBoard = new GameOfLifeBoard(
  numberOfLines,
  numberOfColumns
).createBoard();

// console.log(gameBoard);

// const table = document.createElement("table");
// const tr = document.createElement("tr");
// table.appendChild(tr);

// const newContent = document.createTextNode("test");
// table.appendChild(newContent);

// const currentDiv = document.getElementById("div1");

// for (const element of gameBoard) {
//   console.log(element);
// }

for (let line = 0; line < numberOfLines.length; line++) {
  console.log(line);
}

// document.body.insertBefore(table, currentDiv);
