import React from 'react'
import App from './App';
import {mount} from 'enzyme'; 
import {findByTestAttr} from './test/testUtils'
import hookActions from './actions/hookActions'


const mockGetSecretWord = jest.fn(); 
 

const setUp = (secretWord='party') => {
  mockGetSecretWord.mockClear(); 
  hookActions.getSecretWord = mockGetSecretWord;

  const mockUseReducer = jest.fn()
  .mockReturnValue([
    {secretWord, language: 'en'},
    jest.fn()
  ]); 

  React.useReducer = mockUseReducer

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

describe('secretWord is not null', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = setUp('party')
  })
  test('renders app when secretWord is not null', () => {
    const component = findByTestAttr(wrapper, 'app-component'); 
    expect(component.exists()).toBe(true); 
  }); 

  test('does not render spinner when secretWord is not null', () => {
    const spinner = findByTestAttr(wrapper, 'spinner'); 
    expect(spinner.exists()).toBe(false);
  }); 
});

describe('secretWord is null', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = setUp(null)
  })
  test('does not render app when secretWord is null', () => {
    const component = findByTestAttr(wrapper, 'app-component'); 
    expect(component.exists()).toBe(false); 
  }); 

  test('renders spinner when secretWord is null', () => {
    const spinner = findByTestAttr(wrapper, 'spinner'); 
    expect(spinner.exists()).toBe(true);
  }); 
});