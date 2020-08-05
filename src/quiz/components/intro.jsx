/*  ========================================================================
    # Quiz - Components - Intro
    ========================================================================  */

// Dependencies
import React from 'react';

const Intro = props => {
  return (
    <div className='c-intro'>
      <h1>{props.intro.title}</h1>
      <p>{props.intro.text}</p>
      <a
        className='c-quiz__button'
        onClick={() => {
          props.setState('questions');
        }}
      >
        {props.intro.button}
      </a>
    </div>
  );
};

export default Intro;
