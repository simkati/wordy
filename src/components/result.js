import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GiTrophyCup } from "react-icons/gi";

import { newEnigma, selectEnigma } from '../datastore/enigmaSlice';
import { clearGuessedWords } from '../datastore/guessedWordsSlice';
import { getRandomWord } from '../words';
import { result } from '../content/content';


export function Result(props) {

  const enigma = useSelector(selectEnigma);
  const dispatch = useDispatch();
  const newGame = () => {
    dispatch(newEnigma(getRandomWord()));
    dispatch(clearGuessedWords());
  }

  return (
    <div className='result'>
      {props.win &&
        <><GiTrophyCup /><p>{result.winMsg}</p></>
      }
      {!props.win &&
        <><p className='enigma'>{enigma.map((l) => <span>{l}</span>)}</p><p>{result.lostMsg}</p></>
      }
      <button onClick={newGame} >Új játék</button>
    </div>
  );
}
