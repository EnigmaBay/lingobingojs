const calcBingoV = require('../funcLib/CalcBingoV.js');
const testArrays = require('./testData/verticalBingoPatterns.json');
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

test('can calculate vertical bingo', ()=>{
  expect(calcBingoV(patterns.find(item=>item.pattern==='col0').dauberedTiles)).toBeTruthy();
  expect(calcBingoV(patterns.find(item=>item.pattern==='col1').dauberedTiles)).toBeTruthy();
  expect(calcBingoV(patterns.find(item=>item.pattern==='col2').dauberedTiles)).toBeTruthy();
  expect(calcBingoV(patterns.find(item=>item.pattern==='col3').dauberedTiles)).toBeTruthy();
  expect(calcBingoV(patterns.find(item=>item.pattern==='col4').dauberedTiles)).toBeTruthy();
});
