class GameOfLifeBoard {
  linesAmount;
  elementsPerLine;
  board = [];

  constructor(linesAmount, elementsPerLine) {
    this.linesAmount = linesAmount;
    this.elementsPerLine = elementsPerLine;
  }

  createBoard() {
    for (let line = 0; line < this.linesAmount; line++) {
      const lineArray = [];
      for (let column = 0; column < this.elementsPerLine; column++) {
        lineArray.push(Math.floor(Math.random() * 2));
      }
      this.board.push(lineArray);
    }
    return this.board;
  }
}

export default GameOfLifeBoard;
