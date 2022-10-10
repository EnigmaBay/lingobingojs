const checkForBingo = require('../funcLib/CheckForBingo.js');
const crossBingoPatterns = require('./testData/crossBingoPatterns.json');
const vBingoPatterns = require('./testData/verticalBingoPatterns.json');
const hBingoPatterns = require('./testData/horizontalBingoPatterns.json');
const freeSpacePatterns = require('./testData./freeSpacePatterns.json');

const freeSpaceOne = [];
const freeSpaceTwo = [];
const freeSpaceThree = [];
const freeSpaceFour = [];
const freeSpaceFiveNo = [];
const freeSpaceFiveBingo = [];

freeSpacePatterns.map((list) => {
  if (list.pattern === 'one') {
    list.dauberedTiles.forEach(tile => freeSpaceOne.push(tile));
  }
  if (list.pattern === 'two') {
    list.dauberedTiles.forEach(tile => freeSpaceTwo.push(tile));
  }
  if (list.pattern === 'three') {
    list.dauberedTiles.forEach(tile => freeSpaceThree.push(tile));
  }
  if (list.pattern === 'four') {
    list.dauberedTiles.forEach(tile => freeSpaceFour.push(tile));
  }
  if (list.pattern === 'five') {
    list.dauberedTiles.forEach(tile => freeSpaceFiveNo.push(tile));
  }
  if (list.pattern === 'fiveBingo') {
    list.dauberedTiles.forEach(tile => freeSpaceFiveBingo.push(tile));
  }
});

const tlbr = [];
crossBingoPatterns.map((list) => {
  if (list.pattern === 'tlbr') {
    list.dauberedTiles.forEach(tile => tlbr.push(tile));
  }
});

const trbl = [];
crossBingoPatterns.map((list) => {
  if (list.pattern === 'trbl') {
    list.dauberedTiles.forEach(tile => trbl.push(tile));
  }
});

const rowZeroTiles = [];
const rowOneTiles = [];
const rowTwoTiles = [];
const rowThreeTiles = [];
const rowFourTiles = [];

hBingoPatterns.map((list) => {
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

const colZeroTiles = [];
const colOneTiles = [];
const colTwoTiles = [];
const colThreeTiles = [];
const colFourTiles = [];

vBingoPatterns.map((list) => {
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

test('can calculate horizontal bingo', ()=>{
  expect(checkForBingo(freeSpaceOne,1)).toBeFalsy();
  expect(checkForBingo(freeSpaceTwo,2)).toBeFalsy();
  expect(checkForBingo(freeSpaceThree,3)).toBeFalsy();
  expect(checkForBingo(freeSpaceFour,4)).toBeFalsy();
  expect(checkForBingo(freeSpaceFiveNo,5)).toBeFalsy();
  expect(checkForBingo(freeSpaceFiveBingo,5)).toBeTruthy();
  expect(checkForBingo(19)).toBeFalsy();
  expect(checkForBingo(20)).toBeTruthy();
});
