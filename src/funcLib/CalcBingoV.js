function CalcBingoV(tiles) {
  let result = false;

  let first = 0;
  let second = 0;
  let third = 0;
  let fourth = 0;
  let fifth = 0;

  tiles.map((item, idx) => {
    if (idx % 5 === 0 && item === true) {
      first++;
    }
    if ([1, 6, 11, 16, 21].includes(idx) && item === true) {
      second++;
    }
    if ([2, 7, 12, 17, 22].includes(idx) && item === true) {
      third++;
    }
    if ([3, 8, 13, 18, 23].includes(idx) && item === true) {
      fourth++;
    }
    if ([4, 9, 14, 19, 24].includes(idx) && item === true) {
      fifth++;
    }
  });

  const items = [first, second, third, fourth, fifth];
  if (items.includes(5)) {
    result = true;
  }

  return (
    result
  );
}

module.exports = CalcBingoV;
