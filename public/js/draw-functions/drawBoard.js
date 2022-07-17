const drawBoard = (board, ctx, cellResolution) => {
  for (let line = 0; line < board.length; line++) {
    for (let element = 0; element < board[line].length; element++) {
      const cell = board[element][line];

      ctx.beginPath();
      ctx.rect(
        line * cellResolution,
        element * cellResolution,
        cellResolution,
        cellResolution
      );
      ctx.fillStyle = cell ? "red" : "white";
      ctx.fill();
      ctx.stroke();
    }
  }
};

export default drawBoard;
