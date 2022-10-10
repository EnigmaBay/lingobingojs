const calcBingoX = require('./CalcBingoX');
const calcBingoH = require('./CalcBingoH');
const calcBingoV = require('./CalcBingoV');

function CalculateBingo(tiles,moves) {
  let xResult = false;
  let hResult = false;
  let vResult = false;
  let result = false;

  if (moves > 5) {
    xResult = calcBingoX(tiles);
    hResult = calcBingoH(tiles);
    vResult = calcBingoV(tiles);
    result = (
      xResult === true ||
      hResult === true ||
      vResult === true
    );
  }

  if (moves === 5) {
    result = calcBingoX(tiles);
  }

  return (
    result
  );
}

module.exports = CalculateBingo;
