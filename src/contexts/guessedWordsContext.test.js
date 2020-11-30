import React from 'react'; 
import {shallow} from 'enzyme'; 

import {GuessedWordsProvider, useGuessedWords} from './guessedWordsContext'

const FunctionalComponent = () => {
    useGuessedWords();
    return <div></div>
}

test('useSuccess throws error when not wrapper in SuccessProvider', () => {
    expect(() => {
        shallow(<FunctionalComponent />)
    }).toThrow('useGuessedWords must be wrapped in GuessedWordsProvider')
}); 

test('useSuccess does not throw error when wrapper in SuccessProvider', () => {
    // eslint-disable-next-line jest/valid-expect
    expect(() => {
        shallow(
            <GuessedWordsProvider.SuccessProvider>
                <FunctionalComponent />
            </GuessedWordsProvider.SuccessProvider>
        ).not.toThrow()
    })
})