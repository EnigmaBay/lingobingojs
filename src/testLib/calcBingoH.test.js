const calcBingoH = require('../funcLib/CalcBingoH.js');
const testArrays = require('./testData/horizontalBingoPatterns.json');

const rowZeroTiles = [];
const rowOneTiles = [];
const rowTwoTiles = [];
const rowThreeTiles = [];
const rowFourTiles = [];

testArrays.map((list) => {
  if (list.pattern === 'row0') {
    list.dauberedTiles.forEach(tile => rowZeroTiles.push(tile));
  }
  if (list.pattern === 'row1') {
    list.dauberedTiles.forEach(tile => rowOneTiles.push(tile));
  }
  if (list.pattern === 'row2') {
    list.dauberedTiles.forEach(tile => rowTwoTiles.push(tile));
  }
  if (list.pattern === 'row3') {
    list.dauberedTiles.forEach(tile => rowThreeTiles.push(tile));
  }
  if (list.pattern === 'row4') {
    list.dauberedTiles.forEach(tile => rowFourTiles.push(tile));
  }
});

test('can calculate horizontal bingo', () => {
  expect(calcBingoH(rowZeroTiles)).toBeTruthy();
  expect(calcBingoH(rowOneTiles)).toBeTruthy();
  expect(calcBingoH(rowTwoTiles)).toBeTruthy();
  expect(calcBingoH(rowThreeTiles)).toBeTruthy();
  expect(calcBingoH(rowFourTiles)).toBeTruthy();
});
