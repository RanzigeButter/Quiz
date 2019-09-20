/*  ========================================================================
    # Quiz - Components - Question
    ========================================================================  */

import React, { Component } from 'react';

/*  Class
    ========================================================================  */

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 1,
      score: 0
    };
  }

  submitAnswer(value) {
    if (value === true) {
      this.setState(prevState => {
        return {
          currentQuestion: prevState.currentQuestion + 1,
          score: prevState.score + 1
        };
      });
    } else if (value === false) {
      this.setState(prevState => {
        return {
          currentQuestion: prevState.currentQuestion + 1
        };
      });
    }
  }

  render() {
    if (this.props.isDataLoaded) {
      if (this.state.currentQuestion <= this.props.data.length) {
        return (
          <div className='c-questions'>
            <div className='top'>
              <span className='current'>
                Question: {this.state.currentQuestion} out of {this.props.data.length}
              </span>
              <a
                className='reset'
                onClick={() => {
                  return this.props.handleState('Intro', 0);
                }}
              >
                Restart
              </a>
            </div>

            <h1>{this.props.data[this.state.currentQuestion - 1]['question']}</h1>
            <div className='options'>
              {this.props
                .shuffleArray(this.props.data[this.state.currentQuestion - 1]['options'])
                .map((option, index) => {
                  return (
                    <label key={index} className='options-item'>
                      <input
                        type='button'
                        name='options'
                        onClick={() => {
                          this.submitAnswer(option.value);
                        }}
                      />
                      <span>{option.content}</span>
                    </label>
                  );
                })}
            </div>

            <div className='progress-bar'>
              <div
                className='bar'
                style={{
                  width: `${(100 / this.props.data.length) * this.state.currentQuestion}%`
                }}
              ></div>
            </div>
          </div>
        );
      } else {
        {
          /* If there is no question left, proceed to the result screen. */
        }
        this.props.handleState('Result', this.state.score);
      }
    }
    return <h1>ERROR</h1>;
  }
}

/*  Export
    ========================================================================  */

export default Questions;
