const calcBingoV = require('../funcLib/CalcBingoV.js');
const testArrays = require('./testData/verticalBingoPatterns.json');

const colZeroTiles = [];
const colOneTiles = [];
const colTwoTiles = [];
const colThreeTiles = [];
const colFourTiles = [];

testArrays.map((list) => {
  if (list.pattern === 'col0') {
    list.dauberedTiles.forEach(tile => colZeroTiles.push(tile));
  }
  if (list.pattern === 'col1') {
    list.dauberedTiles.forEach(tile => colOneTiles.push(tile));
  }
  if (list.pattern === 'col2') {
    list.dauberedTiles.forEach(tile => colTwoTiles.push(tile));
  }
  if (list.pattern === 'col3') {
    list.dauberedTiles.forEach(tile => colThreeTiles.push(tile));
  }
  if (list.pattern === 'col4') {
    list.dauberedTiles.forEach(tile => colFourTiles.push(tile));
  }
});

test('can calculate vertical bingo', ()=>{
  expect(calcBingoV(colZeroTiles)).toBeTruthy();
  expect(calcBingoV(colOneTiles)).toBeTruthy();
  expect(calcBingoV(colTwoTiles)).toBeTruthy();
  expect(calcBingoV(colThreeTiles)).toBeTruthy();
  expect(calcBingoV(colFourTiles)).toBeTruthy();
});
