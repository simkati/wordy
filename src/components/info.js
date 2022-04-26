import React from 'react';
import { IoClose } from 'react-icons/io5';

import { info } from '../content/content';
import example from '../content/example.png';
import example2 from '../content/example2.png';
import example3 from '../content/example3.png';

export function Info(props) {

  return (
    <div className='info' onClick={props.callBack}>
      <p className='close' ><IoClose /></p>
      <h1>{info.title}</h1>
      <p>{info.goal}</p>
      <p>{info.role}</p>
      <div className='exampleImg'><img src={example} alt='example'></img></div>
      <p>{info.exampleText}</p>
      <div className='exampleImg'><img src={example2} alt='example'></img></div>
      <p>{info.example2Text}</p>
      <div className='exampleImg'><img src={example3} alt='example'></img></div>
      <p>{info.example3Text}</p>
    </div>
  )
}
