const changeCellStatus = (cell, liveNeighbors) => {
  if (cell.isAlive && liveNeighbors < 2) {
    return (cell.isAlive = false);
  } else if (
    (cell.isAlive && liveNeighbors === 2) ||
    (cell.isAlive && liveNeighbors === 3)
  ) {
    return (cell.isAlive = true);
  } else if (cell.isAlive && liveNeighbors > 3) {
    return (cell.isAlive = false);
  }
  if (!cell.isAlive && liveNeighbors === 3) {
    return (cell.isAlive = true);
  }
};

export default changeCellStatus;
