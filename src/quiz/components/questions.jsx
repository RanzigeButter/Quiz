/*  ========================================================================
    # Quiz - Components - Question
    ========================================================================  */

// Dependencies
import React from 'react';

const Questions = props => {
  const submitAnswer = value => {
    if (value === true) {
      props.setCurrentQuestion(props.currentQuestion + 1);
      props.setScore(props.score + 1);
    } else if (value === false) {
      props.setCurrentQuestion(props.currentQuestion + 1);
    }
  };

  if (props.currentQuestion <= props.questionsCount) {
    return (
      <div className='c-questions'>
        <div className='top'>
          <span className='current'>
            Question: {props.currentQuestion} out of {props.questionsCount}
          </span>
          <a
            className='reset'
            onClick={() => {
              props.setState('questions');
              props.setCurrentQuestion(1);
              props.setScore(0);
            }}
          >
            Restart
          </a>
        </div>

        <h1>{props.questions[props.currentQuestion - 1]['question']}</h1>
        <div className='options'>
          {props.questions[props.currentQuestion - 1]['options'].map((option, index) => {
            return (
              <label key={index} className='options__item'>
                <input
                  type='button'
                  name='options'
                  onClick={() => {
                    submitAnswer(option.value);
                  }}
                />
                <span>{option.content}</span>
              </label>
            );
          })}
        </div>

        <div className='progress'>
          <div
            className='progress__bar'
            style={{ width: `${(100 / props.questionsCount) * props.currentQuestion}%` }}
          ></div>
        </div>
      </div>
    );
  } else {
    // If there is no question left, proceed to the result screen.
    props.setState('result');
  }
  return <h1>ERROR</h1>;
};

export default Questions;
