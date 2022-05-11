import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GrReturn, GrUndo } from 'react-icons/gr';

import { Letter } from './letter';
import { addGuessLetter, deleteGuessLetter, clearGuessLetter, selectGuess} from '../datastore/guessSlice';
import { addGuessWord, selectGuessedWords} from '../datastore/guessedWordsSlice';
import { selectEnigma } from '../datastore/enigmaSlice';
import { addErrorMsg, clearErrorMsg } from '../datastore/errorMsgSlice';
import { guessValid } from '../words';
import { keyboard } from '../content/content';

export function Keyboard(props) {
  const letters = ['cs','dzs','gy','ly','ny','sz','ty','zs',
      'ö','ü','ó','q','w','e','r','t','z','u','i','o',
      'p','ő','ú','a','s','d','f','g','h','j','k','l',
      'é','á','ű','í','x','c','v','b','n','m'];

  const enigma = useSelector(selectEnigma);
  const guess = useSelector(selectGuess);
  const guessedWords = useSelector(selectGuessedWords);
  const dispatch = useDispatch();
  const win = guessedWords.some(word => word.join('') === enigma.join(''));

  const onClickLetter = (l) => {
    if (guess.length < 5 && !win) {
      if (l==='s' && guess.length >= 1 && guess[guess.length-1] === 'c') {
        dispatch(deleteGuessLetter());
        dispatch(addGuessLetter('cs'));
      } else if (l==='z' && guess.length >= 1 && guess[guess.length-1] === 's') {
        dispatch(deleteGuessLetter());
        dispatch(addGuessLetter('sz'));
      }  else if (l==='s' && guess.length >= 2 &&
          guess[guess.length-1] === 'z' &&
          guess[guess.length-2] === 'd') {
        dispatch(deleteGuessLetter());
        dispatch(deleteGuessLetter());
        dispatch(addGuessLetter('dzs'));
      } else if (l==='s' && guess.length >= 1 && guess[guess.length-1] === 'z') {
        dispatch(deleteGuessLetter());
        dispatch(addGuessLetter('zs'));
      } else {
        dispatch(addGuessLetter(l));
      }

    }
  };
  const deleteLetter = () => {
    dispatch(deleteGuessLetter());
    dispatch(clearErrorMsg());
  };
  const send = () => {
      if (guess.length === 5) {
        if (guessValid(guess.join(''))) {
          dispatch(addGuessWord(guess));
          dispatch(clearGuessLetter());
        } else {
            dispatch(addErrorMsg("guess-not-valid"));
        }
    }
  };
  function getClass(l) {
    const letterTried = guessedWords.some(word => word.includes(l));
    const letterHit = letterTried && enigma.includes(l);
    const letterCorrect = letterHit & guessedWords.some(word => {
      return word.some((letter, i) => l === letter && enigma[i] === l);
    });

    if (letterCorrect) {
      return 'letter correct';
    } else if (letterHit) {
        return 'letter hit';
    } else if (letterTried) {
      return 'letter faulty';
    } else {
      return 'letter';
    }
  }

  return (
    <div className='keyboard'>
      <div className='letter-wrapper'>
        {letters.map((l) => <Letter className={getClass(l)} key={l} letter={l} onClick={() => onClickLetter(l)} />)}
      </div>
      <div className='action-btns'>
        <button className='enterBtn' onClick={send}><GrReturn />{keyboard.enterBtn}</button>
        <button className='deleteBtn' onClick={deleteLetter}><GrUndo />{keyboard.deleteBtn}</button>
      </div>
    </div>
  )
}
