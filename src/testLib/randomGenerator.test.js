const randomGen = require('../funcLib/RandomGen.js');

test('generator creates array of Numbers within limit', ()=>{
  const five=randomGen(5);
  expect(five.length).toBe(5);
  expect(five).toContain(0);
  expect(five).toContain(1);
  expect(five).toContain(2);
  expect(five).toContain(3);
  expect(five).toContain(4);

  const twenty=randomGen(20);
  expect(twenty.length).toBe(20);
});
