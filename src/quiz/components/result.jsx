/*  ========================================================================
    # Quiz - Components - Result
    ========================================================================  */

// Dependencies
import React from 'react';

const Result = props => {
  const percent = (100 / props.questionsCount) * props.score;
  let message;

  if (percent === 100) {
    message = props.result.pct100;
  } else if (percent >= 80) {
    message = props.result.pct80;
  } else if (percent >= 60) {
    message = props.result.pct60;
  } else if (percent >= 40) {
    message = props.result.pct40;
  } else if (percent >= 20) {
    message = props.result.pct20;
  } else {
    message = props.result.pct0;
  }

  return (
    <div className='c-result'>
      <h1>
        You correctly answered {props.score} out of {props.questionsCount} questions.
      </h1>
      <p>{message}</p>
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
