/*  ========================================================================
    # Quiz
    ========================================================================  */

// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Components
import DataFile from './data.jsx';
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
      isDataLoaded: false,
      data: [],
      score: 0
    };
    this.shuffleArray = this.shuffleArray.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  componentDidMount() {
    this.setState({
      isDataLoaded: true,
      data: this.shuffleArray(DataFile)
    });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  handleState(newState, newScore = 0) {
    this.setState({ currentState: newState, score: newScore });
  }

  render() {
    if (this.state.currentState === 'Intro')
      return <Intro handleState={this.handleState} />;
    if (this.state.currentState === 'Questions')
      return (
        <Questions
          handleState={this.handleState}
          shuffleArray={this.shuffleArray}
          isDataLoaded={this.state.isDataLoaded}
          data={this.state.data}
        />
      );
    if (this.state.currentState === 'Result')
      return (
        <Result
          handleState={this.handleState}
          data={this.state.data}
          score={this.state.score}
        />
      );
    else return <h1>ERROR</h1>;
  }
}

/*  Render
    ========================================================================  */

const RootElement = document.getElementById('quiz');
ReactDOM.render(<Quiz />, RootElement);
