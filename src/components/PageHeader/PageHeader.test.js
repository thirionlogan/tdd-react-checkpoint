import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import PageHeader from './PageHeader';

describe('PageHeader', () => {
  let component;
  const mockHandleSearch = jest.fn();

  beforeEach(() => {
    component = mount(
      <Router>
        <PageHeader handleSearch={mockHandleSearch} />
      </Router>
    );
  });

  it('should render', () => {
    expect(component.exists('header')).toBe(true);
  });

  it('should have GMDB title', () => {
    expect(component.find('h1').text()).toBe('GMDB');
  });

  it('should have a link to home (/)', () => {
    const homelink = component.find('#homeLink').find('Link');
    expect(homelink.text()).toBe('Home');
    expect(homelink.props().to).toBe('/');
  });

  it('should have a link to login (/login)', () => {
    const homelink = component.find('#loginLink').find('Link');
    expect(homelink.text()).toBe('Login');
    expect(homelink.props().to).toBe('/login');
  });

  describe('in the search form', () => {
    it('should have a search box', () => {
      const searchBox = component.find('form').find('input');
      expect(searchBox.props().type).toBe('search');
    });

    it('should have a search button', () => {
      const searchButton = component.find('form').find('button');
      expect(searchButton.text()).toBe('Search');
      expect(searchButton.props().type).toBe('submit');
    });

    describe('when search is filled out and button is clicked', () => {
      beforeEach(() => {
        const searchButton = component.find('form').find('button');
        const searchBox = component.find('form').find('input');
        searchBox.simulate('change', { target: { value: 'batman' } });
        component.update();
        searchButton.simulate('click');
      });

      it('should call handleSearch', () => {
        expect(mockHandleSearch).toBeCalledWith('batman');
      });
    });
  });
});
