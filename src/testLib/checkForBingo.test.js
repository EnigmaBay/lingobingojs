const checkForBingo = require('../funcLib/CheckForBingo.js');
const freeSpacePatterns = require('./testData/freeSpacePatterns.json');
const patterns = [];

freeSpacePatterns.forEach((instance) => {
  const tileList = [];
  instance.dauberedTiles.forEach(tile => tileList.push(tile));
  patterns.push(
    {
      pattern: instance.pattern,
      dauberedTiles: tileList
    }
  );
});

test('can calculate horizontal bingo', ()=>{
  expect(checkForBingo(patterns.find(item=>item.pattern==='zero').dauberedTiles,0)).toBeFalsy();
  expect(checkForBingo(patterns.find(item=>item.pattern==='one').dauberedTiles,1)).toBeFalsy();
  expect(checkForBingo(patterns.find(item=>item.pattern==='two').dauberedTiles,2)).toBeFalsy();
  expect(checkForBingo(patterns.find(item=>item.pattern==='three').dauberedTiles,3)).toBeFalsy();
  expect(checkForBingo(patterns.find(item=>item.pattern==='four').dauberedTiles,4)).toBeFalsy();
  expect(checkForBingo(patterns.find(item=>item.pattern==='five').dauberedTiles,5)).toBeFalsy();
  expect(checkForBingo(patterns.find(item=>item.pattern==='fiveBingo').dauberedTiles,5)).toBeTruthy();
  expect(checkForBingo(patterns.find(item=>item.pattern==='seventeen').dauberedTiles,17)).toBeFalsy();
  expect(checkForBingo(patterns.find(item=>item.pattern==='seventeenBingo').dauberedTiles,17)).toBeTruthy();
  expect(checkForBingo(patterns.find(item=>item.pattern==='eighteen').dauberedTiles,18)).toBeFalsy();
  expect(checkForBingo(patterns.find(item=>item.pattern==='eighteenBingo').dauberedTiles,18)).toBeTruthy();
  expect(checkForBingo(patterns.find(item=>item.pattern==='nineteen').dauberedTiles,19)).toBeFalsy();
  expect(checkForBingo(patterns.find(item=>item.pattern==='nineteenBingo').dauberedTiles,19)).toBeTruthy();
  expect(checkForBingo(patterns.find(item=>item.pattern==='twentyfourBingo').dauberedTiles,24)).toBeTruthy();
  expect(checkForBingo(patterns.find(item=>item.pattern==='twentyfiveBingo').dauberedTiles,25)).toBeTruthy();
});
