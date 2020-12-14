import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders App', () => {
    expect(component.exists('.App')).toBe(true);
  });
  it('render Header', () => {
    expect(component.exists('PageHeader')).toBe(true);
  });
});
