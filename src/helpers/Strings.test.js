import stringsModule from './Strings';
const {getStringByLanguage} = stringsModule;


const strings = {
    en: {english: 'submit'}, 
    emoji: {submit: '🚀'}, 
    mermish: {}
}

test('returns correct submit string for english', () => {
    const string = getStringByLanguage('en', 'submit', strings); 
    expect(string).toBe('submit');
});

test('returns the correct submit string for emoji', () => {
    const string = getStringByLanguage('emoji', 'submit', strings); 
    expect(string).toBe('🚀');
}); 

test('returns english submit string when language doesnt exist', () => {
    const string = getStringByLanguage('notValidLanguage', 'submit', strings); 
    expect(string).toBe('submit');
}); 

test('returns english stiring submit when submit key does not exist for language', () => {
    const string = getStringByLanguage('mermish', 'submit', strings); 
    expect(string).toBe('submit');
});