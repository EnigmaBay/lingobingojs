const calcBingoX = require('../funcLib/CalcBingoX.js');
const testArrays = require('./testData/crossBingoPatterns.json');

const tlbr = [];
testArrays.map((list) => {
  if (list.pattern === 'tlbr') {
    list.dauberedTiles.forEach(tile => tlbr.push(tile));
  }
});

const trbl = [];
testArrays.map((list) => {
  if (list.pattern === 'trbl') {
    list.dauberedTiles.forEach(tile => trbl.push(tile));
  }
});

test('can calculate bingo from top left to bottom right', () => {
  expect(calcBingoX(tlbr)).toBeTruthy();
});

test('can calculate bingo from top right to bottom left', () => {
  expect(calcBingoX(trbl)).toBeTruthy();
});
