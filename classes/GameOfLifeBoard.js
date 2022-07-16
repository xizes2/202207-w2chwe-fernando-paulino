class GameOfLifeBoard {
  lines;
  elementsPerLine;
  board = [];

  constructor(lines, elementsPerLine) {
    this.lines = lines;
    this.elementsPerLine = elementsPerLine;
  }

  createBoard() {
    for (let line = 0; line < this.lines; line++) {
      for (let column = 0; column < this.elementsPerLine; column++) {
        this.board.push({ name: `${line},${column}`, isAlive: true });
      }
    }
    return this.board;
  }
}

const board = new GameOfLifeBoard(15, 5);
board.createBoard();
console.log(board.board);
