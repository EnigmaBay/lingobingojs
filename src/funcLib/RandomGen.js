function RandomGen(limit) {
  let currentNum;
  const randomArray = [];
  for (let count = 0; count < limit; count++) {
    do {
      currentNum = Math.floor(Math.random() * limit);
    } while (randomArray.includes(currentNum));
    randomArray.push(currentNum);
  }
  return (
    randomArray
  );
}

module.exports = RandomGen;
