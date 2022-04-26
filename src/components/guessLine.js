import React from 'react';
import { useSelector } from 'react-redux';
import { selectEnigma } from '../datastore/enigmaSlice';
import { selectErrorMsg } from '../datastore/errorMsgSlice';

export function GuessLine(props) {

  const guess = Array.apply(null, Array(5)).map((l, i) => props.guess[i] ? l = props.guess[i] : l = '');
  const enigma = useSelector(selectEnigma);
  const errorMsg = useSelector(selectErrorMsg);
  let enigmaNotHitLetters = enigma.filter((l, i) => {
    return guess[i] !== l;
  });

  function getCssClass(l, i) {
    if (props.current) {
      return `guessLetter ${errorMsg}`;
    } else {
      return 'guessLetter ' + letterChecker(l, i);
    }
  }
  function letterChecker(letter, index) {
    if (letter === '') {
      return '';
    } else if (!enigma.includes(letter)) {
      return 'faulty';
    } else if (enigma[index] === letter) {
      return 'correct';
    } else if (enigmaNotHitLetters.includes(letter)) {
      enigmaNotHitLetters.splice(enigmaNotHitLetters.indexOf(letter), 1);
      return 'hit';
    } else {
      return 'faulty';
    }
  }

  return (
    <p className='guess-line'>{guess.map((l, i) => <span className={getCssClass(l, i)} key={i}>{l}</span>)}</p>
  )
}
