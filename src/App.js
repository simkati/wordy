import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GrAlert } from 'react-icons/gr';
import { FcAbout } from "react-icons/fc";

import { Keyboard } from './components/keyboard';
import { Guesses } from './components/guesses';
import { Result } from './components/result';
import { Info } from './components/info';
import { app } from './content/content';
import { getRandomWord } from './words';
import {selectEnigma, newEnigma } from './datastore/enigmaSlice';
import { selectGuessedWords } from './datastore/guessedWordsSlice';
import { selectErrorMsg } from './datastore/errorMsgSlice';



function App() {

const enigma = useSelector(selectEnigma);
const dispatch = useDispatch();
const guessedWords = useSelector(selectGuessedWords);
const errorMsg = useSelector(selectErrorMsg);
const win = guessedWords.some(word => word.join('') === enigma.join(''));
const [openInfo, setOpenInfo] = useState(false);

useEffect(() => {
  dispatch(newEnigma(getRandomWord()));
}, []);

const togleInfo = () => {setOpenInfo((prev) => prev === false ? true : false)};

    return (
      <div className="App">
        <p onClick={togleInfo}  className='about'><FcAbout /></p>
        {openInfo && <Info callBack={togleInfo}/>}
        { errorMsg &&
          <p className='error'><GrAlert />{app.errorMsg}</p>
        }
        <Guesses />
        <Keyboard />
        { (win || guessedWords.length === 8) &&
          <Result win={win} />
        }
      </div>
    );

}

export default App;
