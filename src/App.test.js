import React from 'react'
import App from './App';
import {mount} from 'enzyme'; 
import {findByTestAttr} from './test/testUtils'
import hookActions from './actions/hookActions'


const mockGetSecretWord = jest.fn(); 
 

const setUp = () => {
  mockGetSecretWord.mockClear(); 
  hookActions.getSecretWord = mockGetSecretWord;
  return mount(<App />);
}


test('renders without error', () => {
  const wrapper = setUp(); 
  const component = findByTestAttr(wrapper, 'app-component'); 
  expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {

  test('getSecretWord gets called on app mount', () => {
    setUp(); 

    //check to see if secret word was updated 
    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test('secretWord does not update on App update', () => {
    const wrapper = setUp(); 
    mockGetSecretWord.mockClear();

      wrapper.setProps(); 
      expect(mockGetSecretWord).not.toHaveBeenCalled();


  });
});