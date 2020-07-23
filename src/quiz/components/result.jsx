/*  ========================================================================
    # Quiz - Components - Result
    ========================================================================  */

import React, { Component } from 'react';

/*  Class
    ========================================================================  */

class Result extends Component {
  render() {
    if (this.props.score >= 8) {
      return (
        <div className='c-result'>
          <h1>
            You correctly answered {this.props.score} out of {this.props.data.length}{' '}
            questions.
          </h1>
          <p>You did great!</p>
          <a
            className='c-quiz__button'
            onClick={() => {
              return this.props.handleState('Intro', 0);
            }}
          >
            Restart
          </a>
        </div>
      );
    } else {
      return (
        <div className='c-result'>
          <h1>
            You correctly answered {this.props.score} out of {this.props.data.length}{' '}
            questions.
          </h1>
          <p>You can do better than that! Try it again.</p>
          <a
            className='c-quiz__button'
            onClick={() => {
              return this.props.handleState('Intro', 0);
            }}
          >
            Restart
          </a>
        </div>
      );
    }
  }
}

/*  Export
    ========================================================================  */

export default Result;
