import words from '../JSON/itu-wordlist.json';

export default function WordImporter() {
  return (
    words.map((item) => {
      return item.word;
    })
  );
}
