const checkForBingo = require('../funcLib/CheckForBingo.js');
const freeSpacePatterns = require('./testData/freeSpacePatterns.json');

const freeSpaceOne = [];
const freeSpaceTwo = [];
const freeSpaceThree = [];
const freeSpaceFour = [];
const freeSpaceFiveNo = [];
const freeSpaceFiveBingo = [];
const seventeen = [];
const seventeenBingo = [];
const eighteen = [];
const eighteenBingo = [];
const nineteen = [];
const nineteenBingo = [];
const twentyfourBingo = [];
const twentyfiveBingo = [];

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
  if (list.pattern === 'seventeen') {
    list.dauberedTiles.forEach(tile => seventeen.push(tile));
  }
  if (list.pattern === 'seventeenBingo') {
    list.dauberedTiles.forEach(tile => seventeenBingo.push(tile));
  }
  if (list.pattern === 'eighteen') {
    list.dauberedTiles.forEach(tile => eighteen.push(tile));
  }
  if (list.pattern === 'eighteenBingo') {
    list.dauberedTiles.forEach(tile => eighteenBingo.push(tile));
  }
  if (list.pattern === 'nineteen') {
    list.dauberedTiles.forEach(tile => nineteen.push(tile));
  }
  if (list.pattern === 'nineteenBingo') {
    list.dauberedTiles.forEach(tile => nineteenBingo.push(tile));
  }
  if (list.pattern === 'twentyfour') {
    list.dauberedTiles.forEach(tile => twentyfourBingo.push(tile));
  }
  if (list.pattern === 'twentyfive') {
    list.dauberedTiles.forEach(tile => twentyfiveBingo.push(tile));
  }
});

test('can calculate horizontal bingo', ()=>{
  expect(checkForBingo(freeSpaceOne,1)).toBeFalsy();
  expect(checkForBingo(freeSpaceTwo,2)).toBeFalsy();
  expect(checkForBingo(freeSpaceThree,3)).toBeFalsy();
  expect(checkForBingo(freeSpaceFour,4)).toBeFalsy();
  expect(checkForBingo(freeSpaceFiveNo,5)).toBeFalsy();
  expect(checkForBingo(freeSpaceFiveBingo,5)).toBeTruthy();
  expect(checkForBingo(seventeen,17)).toBeFalsy();
  expect(checkForBingo(seventeenBingo,17)).toBeTruthy();
  expect(checkForBingo(eighteen,18)).toBeFalsy();
  expect(checkForBingo(eighteenBingo,18)).toBeTruthy();
  expect(checkForBingo(nineteen,19)).toBeFalsy();
  expect(checkForBingo(nineteenBingo,19)).toBeTruthy();
  expect(checkForBingo(twentyfourBingo,24)).toBeTruthy();
  expect(checkForBingo(twentyfiveBingo,25)).toBeTruthy();
});
