function CalcBingoH(tiles) {
  let result = false;

  let first = 0;
  let second = 0;
  let third = 0;
  let fourth = 0;
  let fifth = 0;

  tiles.map((item, idx) => {
    if (idx >= 0 && idx < 5 && item === true) {
      first++;
    }
    if (idx >= 5 && idx < 10 && item === true) {
      second++;
    }
    if (idx >= 10 && idx < 15 && item === true) {
      third++;
    }
    if (idx >= 15 && idx < 20 && item === true) {
      fourth++;
    }
    if (idx >= 20 && idx < 26 && item === true) {
      fifth++;
    }
  });

  const items = [ first,second,third,fourth,fifth ];
  if (items.includes(5)) {
    result = true;
  }

  return (
    result
  );
}

module.exports = CalcBingoH;
