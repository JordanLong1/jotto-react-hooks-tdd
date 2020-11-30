import React from 'react';
import { mount, shallow } from 'enzyme';
import languageContext from './contexts/LanguageContext'
import { findByTestAttr } from './test/testUtils';
import Congrats from './Congrats';
import SuccessContext from './contexts/successContext'

const setup = ({ success, language}) => {
  language = language || 'en'
  success = success || false; 
  return mount(
    <languageContext.Provider value={language}>
      <SuccessContext.SuccessProvider value={ [success, jest.fn() ]}>
      <Congrats />
      </SuccessContext.SuccessProvider>
    </languageContext.Provider>
  )
}

describe('languagePicker', () => {
  test('correctly renders congrats string in english', () => {
    const wrapper = setup({ success: true }); 
    expect(wrapper.text()).toBe('Congratulations! You guessed the word!')
  }); 

  test('correctly renders congrats string in emoji', () => {
    const wrapper = setup({success: true, language: 'emoji'}); 
    expect(wrapper.text()).toBe('🎯🎉')
  });
})

test('renders without error', () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});
test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});
test('renders non-empty congrats message when `success` is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

