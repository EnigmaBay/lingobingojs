import React from 'react';
import Gameboard from './Gameboard.js';
import randomGen from './funcLib/RandomGen.js';
import wordProcessor from './funcLib/WordProcessor.js';
import wordImporter from './funcLib/WordImporter.js';
import PlayAgainButton from './PlayAgainButton.js';

export default function GameSession() {
  const randInts = randomGen(24);
  let words = wordImporter();
  const randWords = wordProcessor(words, randInts);
  return (
    <div>
      <Gameboard randwords={randWords} />
      <PlayAgainButton className='center-button' disabled={false}/>
    </div>
  );
}
