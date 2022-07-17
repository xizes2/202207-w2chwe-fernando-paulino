const neighboursAliveAmount = (neighbors) => {
  let neighboursAliveCount = 0;

  for (const cell of neighbors) {
    if (cell === 1) {
      neighboursAliveCount++;
    }
  }
  return neighboursAliveCount;
};

export default neighboursAliveAmount;
