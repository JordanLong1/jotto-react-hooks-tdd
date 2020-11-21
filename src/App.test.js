import App from './App';
import {shallow} from 'enzyme'; 
import {findByTestAttr} from './test/testUtils'

const setUp = () => {
  return shallow(<App />);
}


test('renders without error', () => {
  const wrapper = setUp(); 
  const component = findByTestAttr(wrapper, 'app-component'); 
  expect(component.length).toBe(1);
});