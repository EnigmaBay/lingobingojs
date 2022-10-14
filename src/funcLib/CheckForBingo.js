const calcBingoX = require('./CalcBingoX');
const calcBingoH = require('./CalcBingoH');
const calcBingoV = require('./CalcBingoV');

function CalculateBingo(tiles,moves) {
  let result = false;

  if (moves >= 4) {
    const xResult = calcBingoX(tiles);
    const hResult = calcBingoH(tiles);
    const vResult = calcBingoV(tiles);
    result = (
      xResult === true ||
      hResult === true ||
      vResult === true
    );
  }

  return (
    result
  );
}

module.exports = CalculateBingo;
