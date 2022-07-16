import { RuleTester } from "eslint";
import GameOfLifeBoard from "../classes/GameOfLifeBoard";
import findNeighbors from "./findNeighbours";

describe("When a findNeighbours function is called", () => {
  describe("And it receives a board and these 2 coordinates (line:2 and column:2)", () => {
    test("Then it should return all surrounding cells of the coordinates specified.", () => {
      const gameBoardInitialize = new GameOfLifeBoard(3, 3);
      const gameBoard = gameBoardInitialize.createBoard();
      const currentCellLine = 2;
      const currentCellColumn = 2;
      const expectedResult = findNeighbors(
        gameBoard,
        currentCellLine,
        currentCellColumn
      );

      const result = [
        { name: "1,1", isAlive: true },
        { name: "1,2", isAlive: true },
        { name: "2,1", isAlive: true },
      ];

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
