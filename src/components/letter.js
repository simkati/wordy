import React from 'react';

export function Letter(props) {

  return <button className={props.className} onClick={props.onClick}>{props.letter}</button>
}
