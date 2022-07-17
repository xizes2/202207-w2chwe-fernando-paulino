import { RuleTester } from "eslint";
import GameOfLifeBoard from "../classes/GameOfLifeBoard";
import findNeighbors from "./findNeighbours";

describe("Given a findNeighbours function is called", () => {
  describe("When it receives a board and these 2 coordinates (line:2 and column:2)", () => {
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
        { linePosition: 1, columnPosition: 1, isAlive: false },
        { linePosition: 1, columnPosition: 2, isAlive: false },
        { linePosition: 2, columnPosition: 1, isAlive: false },
      ];

      expect(result).toEqual(expectedResult);
    });
  });
});
