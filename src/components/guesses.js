import React from 'react';
import { useSelector } from 'react-redux';
import {GuessLine} from './guessLine';
import { selectGuessedWords } from '../datastore/guessedWordsSlice';
import { selectGuess } from '../datastore/guessSlice';

export function Guesses() {
  const guessedWords = useSelector(selectGuessedWords);
  const guessArray =  Array.apply(null, Array(8)).map( (guess, i) => {
      return guessedWords[i] ? guess = guessedWords[i] : guess = [];
    });
  const currentGuess = useSelector(selectGuess);

  if (guessedWords.length < 8) {
    guessArray[guessedWords.length] = currentGuess;
  }

  return (
      <div className='guess'>
        {guessArray.map((guess, i) => <GuessLine current={i === guessedWords.length} guess={guess} key={i}/>)}
      </div>

  );
}
