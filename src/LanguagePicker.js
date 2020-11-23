import React from 'react'; 
import propTypes from 'prop-types'
export const LanguagePicker = ({ setLanguage }) => {
    const languages = [
        {code: 'en', symbol: '🇺🇸' },
        { code: 'emoji', symbol: '😊' },
    ];

    const icons = languages.map(lang => 
        <span data-test='language-icon'
        key={lang.code}
        onClick={() => setLanguage(lang.code)}
        >
            {lang.symbol}
        </span>
    )

    return (
        <div data-test='language-picker-component'>
            {icons}
        </div>
    )
}

LanguagePicker.propTypes = {
    setLanguage: propTypes.func.isRequired
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    LanguagePicker
}