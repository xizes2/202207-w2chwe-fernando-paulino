import changeCellStatus from "./changeCellsStatus";

describe("Given a function changeCellStatus is called", () => {
  describe("When it receives a cell object with property isAlive false and a number of living neighbors 3", () => {
    test("Then it should change the cell isAlive status to true", () => {
      const currentCell = {
        linePosition: 2,
        columnPosition: 1,
        isAlive: false,
      };
      const livingNeighbours = 3;

      const expectedResult = changeCellStatus(currentCell, livingNeighbours);

      const result = true;

      expect(result).toBe(expectedResult);
    });
  });
  describe("When it receives a cell object with property isAlive true and a number of living neighbors < 2", () => {
    test("Then it should change the cell isAlive status to false", () => {
      const currentCell = {
        linePosition: 2,
        columnPosition: 1,
        isAlive: true,
      };
      const livingNeighbours = 1;

      const expectedResult = changeCellStatus(currentCell, livingNeighbours);

      const result = false;

      expect(result).toBe(expectedResult);
    });
  });
});
