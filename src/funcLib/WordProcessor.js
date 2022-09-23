export default function WordProcessor(words, intsArray) {
  const freeSpaceWord = 'FREE';
  let randomizedWords = [];
  for (let idx=0; idx<intsArray.length; idx++) {
    let selectedIdx = intsArray[idx];
    let selectedWord = words[selectedIdx];
    if (idx === 12) {
      randomizedWords.push(freeSpaceWord);
    }
    randomizedWords.push(selectedWord);
  }
  return (
    randomizedWords
  );
}
