/*  ========================================================================
    # Quiz - Components - Result
    ========================================================================  */

// Dependencies
import React from 'react';

const Result = props => {
  let message;
  if (props.score >= 8) {
    message = <p>You did great!</p>;
  } else {
    message = <p>You can do better than that! Try it again.</p>;
  }

  return (
    <div className='c-result'>
      <h1>
        You correctly answered {props.score} out of {props.questionsCount} questions.
      </h1>
      {message}
      <a
        className='c-quiz__button'
        onClick={() => {
          props.setState('questions');
          props.setCurrentQuestion(1);
          props.setScore(0);
        }}
      >
        Restart
      </a>
    </div>
  );
};

export default Result;
