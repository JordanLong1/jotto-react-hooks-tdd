const languageStrings = {
    en: {
      congrats: 'Congratulations! You guessed the word!',
      submit: 'Submit',
      guessPrompt: 'Try to guess the secret word!',
      guessInputPlaceholder: 'enter guess',
      guessColumnHeader: 'Guessed Words',
      numberColumnHeader: '#',
      totalGuesses: 'Total Guesses',
      guessedWords: 'Guesses',
      matchingLettersColumnHeader: 'Matching Letters',
    
    },
    emoji: {
      congrats: '🎯🎉',
      submit: '🚀',
      guessPrompt: '🤔🤫🔤',
      guessInputPlaceholder: '⌨️🤔',
      guessedWords: '🤷‍🔤',
      guessColumnHeader: '🤷‍',
      matchingLettersColumnHeader: '✅',
     
    }
  }

  const getStringByLanguage = (languageCode, stringKey, stringsObj={languageStrings}) => {

  }

  // eslint-disable-next-line import/no-anonymous-default-export
  export default {
      getStringByLanguage,
  }