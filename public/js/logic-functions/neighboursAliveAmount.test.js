import neighboursAliveAmount from "./neighboursAliveAmount";

describe("Given a function neighboursAliveAmount its' called", () => {
  describe("When it receives a list of objects (cells)", () => {
    test("Then it should return the amount of neighbors alive.", () => {
      const cellsList = [
        { name: "1,1", isAlive: true },
        { name: "1,2", isAlive: true },
        { name: "2,1", isAlive: true },
      ];
      const expectedResult = 3;

      const result = neighboursAliveAmount(cellsList);

      expect(result).toEqual(expectedResult);
    });
  });
});
