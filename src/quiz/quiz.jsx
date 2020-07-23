/*  ========================================================================
    # Quiz
    ========================================================================  */

// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Components
import Data from './data.jsx';
import Intro from './components/intro.jsx';
import Questions from './components/questions.jsx';
import Result from './components/result.jsx';

/*  App
    ========================================================================  */

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentState: 'Intro',
      dataLoaded: false,
      questions: [],
      score: 0
    };

    this.shuffleArray = this.shuffleArray.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  componentDidMount() {
    this.setState({
      dataLoaded: true,
      questions: this.shuffleArray(Data.questions)
    });
  }

  handleState(newState, newScore = 0) {
    this.setState({ currentState: newState, score: newScore });
  }

  render() {
    if (this.state.dataLoaded) {
      if (this.state.currentState === 'Intro') {
        return <Intro handleState={this.handleState} />;
      } else if (this.state.currentState === 'Questions') {
        return (
          <Questions
            handleState={this.handleState}
            shuffleArray={this.shuffleArray}
            questions={this.state.questions}
          />
        );
      } else if (this.state.currentState === 'Result') {
        return (
          <Result
            handleState={this.handleState}
            questions={this.state.questions}
            score={this.state.score}
          />
        );
      }
    }
    return <h1>ERROR</h1>;
  }
}

/*  Render
    ========================================================================  */

const RootElement = document.getElementById('quiz');
ReactDOM.render(<Quiz />, RootElement);
