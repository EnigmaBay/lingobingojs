function CalcBingoX(tiles) {
  const topLeftBottomRightTiles = [0, 6, 12, 18, 24];
  const topRightBottomLeftTiles = [4, 8, 12, 16, 20];

  let topLeftBottomRightCount = 0;
  let topRightBottomLeftCount = 0;

  // console.log('tiles is now an array? ' + Array.isArray(tiles));
  // console.log('how long is it? ' + tiles.length);

  tiles.map((tile, idx) => {
    // console.log('idx: ' + idx);
    // console.log('tile: ' + tile);

    if (tile === true) {
      // console.log('tile ' + idx + ' contains true');

      if (topLeftBottomRightTiles.includes(idx)) {
        // console.log('idx ' + idx + ' is in tlbr.');
        topLeftBottomRightCount++;
      }
      if (topRightBottomLeftTiles.includes(idx)) {
        // console.log('idx ' + idx + ' is in trbl.');
        topRightBottomLeftCount++;
      }
    }
    return;
  });

  // console.log('topLeftBottomRightCOunt: ' + topLeftBottomRightCount);
  // console.log('topRightBottomLeftCount: ' + topRightBottomLeftCount);

  const result = topLeftBottomRightCount === 5 || topRightBottomLeftCount === 5;

  return (
    result
  );
}

module.exports = CalcBingoX;
