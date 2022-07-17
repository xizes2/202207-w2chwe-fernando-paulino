import GameOfLifeBoard from "./GameOfLifeBoard";

describe("Given a GameOfLifeBoard class", () => {
  describe("When it's method createBoard is called and it receives 3 and 3", () => {
    test("Then it should return an array with 3 arrays containing 3 elements in each array", () => {
      const linesAmount = 3;
      const elementsPerLine = 3;
      const gameBoard = new GameOfLifeBoard(linesAmount, elementsPerLine);
      const expectedResult = [
        [
          { linePosition: 0, columnPosition: 0, isAlive: false },
          { linePosition: 0, columnPosition: 1, isAlive: false },
          { linePosition: 0, columnPosition: 2, isAlive: false },
        ],
        [
          { linePosition: 1, columnPosition: 0, isAlive: false },
          { linePosition: 1, columnPosition: 1, isAlive: false },
          { linePosition: 1, columnPosition: 2, isAlive: false },
        ],
        [
          { linePosition: 2, columnPosition: 0, isAlive: false },
          { linePosition: 2, columnPosition: 1, isAlive: false },
          { linePosition: 2, columnPosition: 2, isAlive: false },
        ],
      ];

      const result = gameBoard.createBoard();

      expect(result).toEqual(expectedResult);
    });
  });
});
