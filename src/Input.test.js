import {shallow} from 'enzyme'; 
import Input from './Input'; 
import {findByTestAttr} from './test/testUtils'


const setUp = () => shallow(<Input />); 

test('renders the componnent without throwing an error', () => {
    const wrapper = setUp(); 
    const component = findByTestAttr(wrapper, 'input-component'); 
    expect(component.length).toBe(1); 
}); 