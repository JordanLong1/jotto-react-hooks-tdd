import React from 'react'; 
import {shallow} from 'enzyme'; 



import {findByTestAttr, checkProps} from './test/testUtils'; 
import { LanguagePicker } from './LanguagePicker';

const mockSetLanguage = jest.fn(); 

const setUp = () => {
    return shallow(<LanguagePicker setLanguage={mockSetLanguage} />); 
}

test('renders without error', () => {
    const wrapper = setUp(); 
    const component = findByTestAttr(wrapper, 'language-picker-component'); 
    expect(component.exists()).toBe(true); 
}); 

test('does not throw warning with expected props', () => {
    checkProps(LanguagePicker, {setLanguage: jest.fn() }); 
}); 

test('renders non-zero language icons', () => {
    const wrapper = setUp(); 
    const icons = findByTestAttr(wrapper, 'language-icon'); 
    expect(icons.length).toBeGreaterThan(0);
});

test('calls setLanguage prop upon click', () => {
    const wrapper = setUp(); 
    const icons = findByTestAttr(wrapper, 'language-icon'); 

    const firstIcon = icons.first(); 
    firstIcon.simulate('click'); 

    expect(mockSetLanguage).toHaveBeenCalled();
}); 

