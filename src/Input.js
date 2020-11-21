import React from 'react'; 
import PropTypes from 'prop-types';


const Input = ({ secretWord }) => {
    return (
        <div data-test='input-component'>

        </div>
    );
};
// PropTypes are a mechanism to ensure that components use the correct data type and pass the right data as props.
Input.propTypes = {
    secretWord: PropTypes.string.isRequired
}


export default Input; 