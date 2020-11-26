import React from 'react';
import {mount, shallow} from 'enzyme'; 
import Input from './Input'; 
import {findByTestAttr, checkProps} from './test/testUtils'
import languageContext from './contexts/LanguageContext'

const setUp = ({language, secretWord}) => { // add prop here to pass checkProps test.
    language = language || 'en'; 
    secretWord = secretWord || 'party'
    return mount(
    <languageContext.Provider value={language}>
        <Input secretWord={secretWord}/>
    </languageContext.Provider>
    )
    
}

test('renders the componnent without throwing an error', () => {
    const wrapper = setUp({}); 
    const component = findByTestAttr(wrapper, 'input-component'); 
    expect(component.length).toBe(1); 
}); 

test('finds submit button without throwing an error', () => {
    const wrapper = setUp({}); 
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
        wrapper = setUp({});
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

    describe('languagePicker', () => {
        test('correctly renders submit string in english', () => {
            const wrapper = setUp({language: 'en'}); 
            const submitButton = findByTestAttr(wrapper, 'submit-button'); 
            expect(submitButton.text()).toBe('Submit');
        }); 

        test('correctly renders congrats string in emoji', () => {
            const wrapper = setUp({language: 'emoji'}); 
            const submitButton = findByTestAttr(wrapper, 'submit-button'); 
            expect(submitButton.text()).toBe('🚀')

        })
    })
}); 