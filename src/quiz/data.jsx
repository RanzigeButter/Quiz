/*  ========================================================================
    # Quiz - Data
    ========================================================================  */

module.exports = {
  // Intro
  // ===========================================================================

  intro: {
    title: 'Welcome',
    text: 'Here is a little quiz to test your knowledge. Have fun!',
    button: 'Start Quiz'
  },

  // Questions
  // ===========================================================================

  questions: [
    {
      id: 0,
      question: 'Who was the first man to fly around the earth with a spaceship?',
      options: [
        {
          content: 'Juri Gagarin',
          value: true
        },
        {
          content: 'Neil Armstrong',
          value: false
        },
        {
          content: 'Buzz Aldrin',
          value: false
        },
        {
          content: 'Chris Austin Hadfield',
          value: false
        }
      ]
    },
    {
      id: 1,
      question: 'What color is cobalt?',
      options: [
        {
          content: 'Blue',
          value: true
        },
        {
          content: 'Red',
          value: false
        },
        {
          content: 'Green',
          value: false
        },
        {
          content: 'Yellow',
          value: false
        }
      ]
    },
    {
      id: 2,
      question: 'What is the lightest existing metal?',
      options: [
        {
          content: 'Aluminium',
          value: true
        },
        {
          content: 'Magnesium',
          value: false
        },
        {
          content: 'Titanium',
          value: false
        },
        {
          content: 'Beryllium',
          value: false
        }
      ]
    },
    {
      id: 3,
      question: 'How many eyes does a honeybee have?',
      options: [
        {
          content: 'Five',
          value: true
        },
        {
          content: 'Four',
          value: false
        },
        {
          content: 'Three',
          value: false
        },
        {
          content: 'Two',
          value: false
        }
      ]
    },
    {
      id: 4,
      question: 'In astronomy, what are Pallas, Vesta and Davida?',
      options: [
        {
          content: 'Asteroids',
          value: true
        },
        {
          content: 'Planets',
          value: false
        },
        {
          content: 'Stars',
          value: false
        },
        {
          content: 'Galaxies',
          value: false
        }
      ]
    },
    {
      id: 5,
      question: 'What was the name of Napoleons first wife?',
      options: [
        {
          content: 'Joséphine',
          value: true
        },
        {
          content: 'Marie-Louise',
          value: false
        },
        {
          content: 'Helena',
          value: false
        },
        {
          content: 'Elisa',
          value: false
        }
      ]
    },
    {
      id: 6,
      question: 'In which city was John Lennon killed?',
      options: [
        {
          content: 'New York',
          value: true
        },
        {
          content: 'Las Vegas',
          value: false
        },
        {
          content: 'Washington',
          value: false
        },
        {
          content: 'Chicago',
          value: false
        }
      ]
    },
    {
      id: 7,
      question: 'In what year was Google launched on the web?',
      options: [
        {
          content: '1998',
          value: true
        },
        {
          content: '1999',
          value: false
        },
        {
          content: '1997',
          value: false
        },
        {
          content: '1996',
          value: false
        }
      ]
    },
    {
      id: 8,
      question: 'What is the singular of Scampi?',
      options: [
        {
          content: 'Scampo',
          value: true
        },
        {
          content: 'Scampa',
          value: false
        },
        {
          content: 'Scampu',
          value: false
        },
        {
          content: 'Scampe',
          value: false
        }
      ]
    },
    {
      id: 9,
      question: 'What is bottled a lot in the French town Vichy?',
      options: [
        {
          content: 'Water',
          value: true
        },
        {
          content: 'Wine',
          value: false
        },
        {
          content: 'Beer',
          value: false
        },
        {
          content: 'Whisky',
          value: false
        }
      ]
    }
  ],

  // Result
  // ===========================================================================

  result: {
    pct0: ':(',
    pct20: 'You can do better, just try it again.',
    pct40: 'Not bad.',
    pct60: 'Nicely done.',
    pct80: 'Pretty impressive.',
    pct100: 'A perfect score! Congratulations!'
  }
};
