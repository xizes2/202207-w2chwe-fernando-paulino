const neighboursAliveAmount = (neighbors) => {
  let neighboursAliveCount = 0;

  for (const cell of neighbors) {
    if (cell.isAlive) {
      neighboursAliveCount++;
    }
  }
  return neighboursAliveCount;
};

export default neighboursAliveAmount;
