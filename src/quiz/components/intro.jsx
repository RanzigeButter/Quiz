/*  ========================================================================
    # Quiz - Components - Intro
    ========================================================================  */

import React, { Component } from 'react';

/*  Class
    ========================================================================  */

class Intro extends Component {
  render() {
    return (
      <div className='c-intro'>
        <h1>Welcome</h1>
        <p>Here is a little quiz, which is build with React, to test your knowledge.</p>
        <p>Have fun!</p>
        <a
          className='c-quiz__button'
          onClick={() => {
            return this.props.handleState('Questions', 0);
          }}
        >
          Start Quiz
        </a>
      </div>
    );
  }
}

/*  Export
    ========================================================================  */

export default Intro;
