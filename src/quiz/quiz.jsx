/*  ========================================================================
    # Quiz
    ========================================================================  */

// React
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Components
import Data from './data.jsx';
import Intro from './components/intro.jsx';
import Questions from './components/questions.jsx';
import Result from './components/result.jsx';

const Quiz = () => {
  // Data
  const [dataLoaded, setDataLoaded] = useState(false);
  const [intro, setIntro] = useState();
  const [questions, setQuestions] = useState();
  const [questionsCount, setQuestionsCount] = useState(0);
  const [result, setResult] = useState();

  // Status
  const [state, setState] = useState('loading');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);

  /*  Shuffle Array
      ======================================================================  */

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      // Shuffle questions
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];

      // Shuffle options
      for (let o = array[i].options.length - 1; o > 0; o--) {
        const j = Math.floor(Math.random() * (o + 1));
        [array[i].options[o], array[i].options[j]] = [array[i].options[j], array[i].options[o]];
      }
    }

    return array;
  };

  /*  Use Effect
      ======================================================================  */

  useEffect(() => {
    setDataLoaded(true);
    setIntro(Data.intro);
    setQuestions(shuffleArray(Data.questions));
    setQuestionsCount(Data.questions.length);
    setResult(Data.result);
    setState('intro');
  }, []);

  /*  Render Components
      ======================================================================  */

  if (dataLoaded) {
    if (state === 'intro') {
      return <Intro intro={intro} setState={setState} />;
    } else if (state === 'questions') {
      return (
        <Questions
          questions={questions}
          questionsCount={questionsCount}
          setState={setState}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          score={score}
          setScore={setScore}
        />
      );
    } else if (state === 'result') {
      return (
        <Result
          result={result}
          questionsCount={questionsCount}
          setState={setState}
          setCurrentQuestion={setCurrentQuestion}
          score={score}
          setScore={setScore}
        />
      );
    }
  }
  return <h1>ERROR</h1>;
};

// Render
const RootElement = document.getElementById('quiz');
ReactDOM.render(<Quiz />, RootElement);
