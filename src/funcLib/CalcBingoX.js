function CalcBingoX(tiles) {
  const topLeftBottomRightTiles = [0, 6, 12, 18, 24];
  const topRightBottomLeftTiles = [4, 8, 12, 16, 20];

  let topLeftBottomRightCount = 0;
  let topRightBottomLeftCount = 0;

  tiles.map((tile, idx) => {

    if (tile === true) {

      if (topLeftBottomRightTiles.includes(idx)) {
        topLeftBottomRightCount++;
      }

      if (topRightBottomLeftTiles.includes(idx)) {
        topRightBottomLeftCount++;
      }
    }
    return;
  });

  const result = topLeftBottomRightCount === 5 || topRightBottomLeftCount === 5;

  return (
    result
  );
}

module.exports = CalcBingoX;
