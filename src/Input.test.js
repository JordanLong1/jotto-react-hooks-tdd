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

test('does not throw warning with expected props', () => {
    checkProps( {secretWord: 'party'}); 

});

describe('state controller input field', () => {
    test('state updates with value onChage', () => {
         const mockSetCurrentGuess = jest.fn(); 
         React.useState = jest.fn(() => ['', mockSetCurrentGuess]); 

         const wrapper = setUp(); 
         const inputBox = findByTestAttr(wrapper, 'input-box'); 

         const mockEvent = {target: {value: 'train'} }; 
         inputBox.simulate('change', mockEvent); 

         expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    }); 
}); 