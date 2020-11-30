import React from 'react'; 

// eslint-disable-next-line react-hooks/rules-of-hooks
const guessedWordsContext = React.useContext(); 


export function useGuessedWords() {
    const context = React.useContext(guessedWordsContext); 


    if (!context) {
        throw new Error('useGuessedWords must be used within guessedWordsProvider'); 
    }

    return context; 
}

export function GuessedWordsProvider(props) {
    const [guessedWords, setGuessedWords] = React.useState([]); 

    const value = React.useMemo(() => [guessedWords, setGuessedWords], [guessedWords])

    return <guessedWordsContext.Provider value={value} {...props} />
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { GuessedWordsProvider, useGuessedWords}