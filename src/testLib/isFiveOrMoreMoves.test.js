const calculateBingo = require('../funcLib/IsFiveOrMoreMoves.js');
const lessThanFive = -1;
const five = 0;
const greaterThanFive = 1;
const mustBeABingo = 2;

test('can calculate horizontal bingo', ()=>{
  expect(calculateBingo(4)).toStrictEqual(lessThanFive);
  expect(calculateBingo(5)).toStrictEqual(five);
  expect(calculateBingo(6)).toStrictEqual(greaterThanFive);
  expect(calculateBingo(19)).toStrictEqual(greaterThanFive);
  expect(calculateBingo(20)).toStrictEqual(mustBeABingo);
});
