import React from 'react'; 
import PropTypes from 'prop-types';
import languageContext from './contexts/LanguageContext';
import stringsModule from './helpers/Strings'
const Input = ({ secretWord }) => {

    const language = React.useContext(languageContext)
    const [currentGuess, setCurrentGuess] = React.useState('') // not destructuring on import so we are able to mock 

    const handleClick = (event) => {
        event.preventDefault(); 

        setCurrentGuess('')
    }

    return (
        <div data-test='input-component'>
            <form className='form-inline'>
            <input 
            data-test='input-box'
            className='mb-2 mx-sm-3'
            type='text'
            placeholder={stringsModule.getStringByLanguage(language, 'guessInputPlaceholder')}
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)}
            />

            <button className='btn btn-primary mb-2'
            data-test='submit-button'
            onClick={handleClick}
            >
            {stringsModule.getStringByLanguage(language, 'Submit')}
            </button>
            </form>
        </div>
    );
};
// PropTypes are a mechanism to ensure that components use the correct data type and pass the right data as props.
Input.propTypes = {
    secretWord: PropTypes.string.isRequired
}


export default Input; 