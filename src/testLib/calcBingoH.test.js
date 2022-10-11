const calcBingoH = require('../funcLib/CalcBingoH.js');
const testArrays = require('./testData/horizontalBingoPatterns.json');
const patterns = [];

testArrays.forEach((instance) => {
  const tileList = [];
  instance.dauberedTiles.forEach(tile => tileList.push(tile));
  patterns.push(
    {
      pattern: instance.pattern,
      dauberedTiles: tileList
    }
  );
});

test('can calculate horizontal bingo', () => {
  expect(calcBingoH(patterns.find(item=>item.pattern==='row0').dauberedTiles)).toBeTruthy();
  expect(calcBingoH(patterns.find(item=>item.pattern==='row1').dauberedTiles)).toBeTruthy();
  expect(calcBingoH(patterns.find(item=>item.pattern==='row2').dauberedTiles)).toBeTruthy();
  expect(calcBingoH(patterns.find(item=>item.pattern==='row3').dauberedTiles)).toBeTruthy();
  expect(calcBingoH(patterns.find(item=>item.pattern==='row4').dauberedTiles)).toBeTruthy();
});
