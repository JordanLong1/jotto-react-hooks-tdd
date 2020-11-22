import React from 'react';
import {shallow} from 'enzyme'; 
import { mockComponent } from 'react-dom/test-utils';
import Input from './Input'; 
import {findByTestAttr, checkProps} from './test/testUtils'


const setUp = (secretWord='party') => { // add prop here to pass checkProps test.
   return shallow(<Input secretWord={secretWord}/>); // added prop here
    
}

test('renders the componnent without throwing an error', () => {
    const wrapper = setUp(); 
    const component = findByTestAttr(wrapper, 'input-component'); 
    expect(component.length).toBe(1); 
}); 

test('finds submit button without throwing an error', () => {
    const wrapper = setUp(); 
    const submitButton = findByTestAttr(wrapper, 'submit-button'); 
    expect(submitButton.length).toBe(1);
});

test('does not throw warning with expected props', () => {
    checkProps( {secretWord: 'party'}); 
});

describe('state controller input field', () => {
    let mockSetCurrentGuess = jest.fn(); 
    let wrapper; 
    beforeEach(() => {
        mockSetCurrentGuess.mockClear()
        React.useState = jest.fn(() => ['', mockSetCurrentGuess]); 
        wrapper = setUp();
    })
    test('state updates with value onChange', () => {
         const inputBox = findByTestAttr(wrapper, 'input-box'); 
         const mockEvent = {target: {value: 'train'} }; 
         inputBox.simulate('change', mockEvent); 
         expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    }); 

    test('setCurrentGuess resets back to an empty string onSubmit', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button'); 
        submitButton.simulate('click', { preventDefault: () => {}}); 
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
    });
}); 