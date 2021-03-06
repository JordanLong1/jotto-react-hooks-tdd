import React from 'react'; 
import hookActions from './actions/hookActions'
import Input from './Input'
import {languageContext} from './contexts/languageContext'; 
import {LanguagePicker} from './LanguagePicker'; 
import successContext from './contexts/successContext'; 
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'

function reducer(state, action) {
  switch(action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
      case "setLanguage":
        return {...state, language: action.payload}; 
      default: 
      throw new Error(`Invalid action type: ${action.type}`)
  }
}


function App() {

  const [state, dispatch] = React.useReducer(
    reducer,
    { secretWord: null, language: 'en' }
  )

  const setLanguage = (language) => {
    dispatch({ type: 'setLanguage', payload: language}); 
  }

  const setSecretWord = (secretWord) =>
    dispatch({ type: "setSecretWord", payload: secretWord });

   
  React.useEffect(
    () => { hookActions.getSecretWord(setSecretWord) },
    []
  )

  if(!state.secretWord) {
    return (
      <div className='container' data-test='spinner'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>...Loading</span>
        </div>
        <p>Loading secret word</p>
      </div>
    )
  }

  return (
   <div data-test='app-component' className='container'>
     <h1>Jotto</h1>
     <languageContext.Provider value={state.language} >
       <LanguagePicker setLanguage={setLanguage} />
       <successContext.SuccessProvider>
         <Congrats />
     <Input secretWord={state.secretWord} />
       </successContext.SuccessProvider>
      
     </languageContext.Provider> 
   </div>
  );
};

export default App;
