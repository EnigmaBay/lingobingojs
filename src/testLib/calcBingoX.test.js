const calcBingoX = require('../funcLib/CalcBingoX.js');
const testArrays = require('./testData/crossBingoPatterns.json');
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
  expect(calcBingoX(patterns.find(item=>item.pattern==='tlbr').dauberedTiles)).toBeTruthy();
  expect(calcBingoX(patterns.find(item=>item.pattern==='trbl').dauberedTiles)).toBeTruthy();
});
