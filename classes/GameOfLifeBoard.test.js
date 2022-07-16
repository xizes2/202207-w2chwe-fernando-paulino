import GameOfLifeBoard from "./GameOfLifeBoard";

describe("Given a GameOfLifeBoard class", () => {
  describe("When it's method createBoard is called and it receives 3 and 3", () => {
    test("Then it should return an array with 3 arrays containing 3 elements in each array", () => {
      const linesAmount = 3;
      const elementsPerLine = 3;
      const gameBoard = new GameOfLifeBoard(linesAmount, elementsPerLine);
      const expectedResult = [
        [
          { name: "0,0", isAlive: true },
          { name: "0,1", isAlive: true },
          { name: "0,2", isAlive: true },
        ],
        [
          { name: "1,0", isAlive: true },
          { name: "1,1", isAlive: true },
          { name: "1,2", isAlive: true },
        ],
        [
          { name: "2,0", isAlive: true },
          { name: "2,1", isAlive: true },
          { name: "2,2", isAlive: true },
        ],
      ];

      const result = gameBoard.createBoard();

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
