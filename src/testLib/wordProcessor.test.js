const wordProcessor = require('../funcLib/WordProcessor.js');

test('processor returns words ordered by array of numbers', ()=>{
  const words = ['alpha','bravo','charlie','delta','echo'];
  const jumbled = ['delta','bravo','echo','charlie','alpha'];
  const reversed = ['echo','delta','charlie','bravo','alpha'];
  const fullBingoBoard = [...words,...words,...words,...words,...words];

  const reverse = [4,3,2,1,0];
  const interleave = [3,1,4,2,0];
  const inOrder = [0,1,2,3,4];
  const twentyFour = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

  const reverseResult = wordProcessor(words,reverse);
  expect(reverseResult).toStrictEqual(reversed);

  const interleaveResult = wordProcessor(words,interleave);
  expect(interleaveResult).toStrictEqual(jumbled);

  const inOrderResult = wordProcessor(words,inOrder);
  expect(inOrderResult).toStrictEqual(words);

  const freeSpaceIncluded = wordProcessor(fullBingoBoard,twentyFour);
  expect(freeSpaceIncluded).toContain('FREE');
});
