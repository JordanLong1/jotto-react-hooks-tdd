import React from 'react'; 
import PropTypes from 'prop-types';


const Input = ({ secretWord }) => {

    const [currentGuess, setCurrentGuess] = React.useState('') // not destructuring on import so we are able to mock 

    return (
        <div data-test='input-component'>
            <form className='form-inline'>
            <input 
            data-test='input-box'
            className='mb-2 mx-sm-3'
            type='text'
            placeholder='Enter Guess'
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)}
            />

            <button className='btn btn-primary mb-2'>
                Submit
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