function findNeighbors(board, currentCellLine, currentCellColumn) {
  const neighboursVectors = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  return neighboursVectors
    .filter(
      ([vectorLine, vectorColumn]) =>
        vectorLine + currentCellLine >= 0 &&
        vectorLine + currentCellLine < board.length &&
        vectorColumn + currentCellColumn >= 0 &&
        vectorColumn + currentCellColumn < board[0].length
    )
    .map(
      ([line, column]) =>
        board[line + currentCellLine][column + currentCellColumn]
    );
}

export default findNeighbors;
