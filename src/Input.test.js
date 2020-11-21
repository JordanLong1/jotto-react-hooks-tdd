// import checkPropTypes from 'check-prop-types';
import {shallow} from 'enzyme'; 
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