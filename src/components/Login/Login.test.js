import { mount } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  let component;
  const mockHandleLogin = jest.fn();

  beforeEach(() => {
    component = mount(<Login handleLogin={mockHandleLogin} />);
  });

  it('has a title called "Login"', () => {
    expect(component.find('h1').text()).toBe('Login');
  });

  describe('login form', () => {
    it('has a login form', () => {
      expect(component.exists('form')).toBe(true);
    });
    it('has an email field', () => {
      const emailLabel = component
        .find('form')
        .find('#emailLabel')
        .find('label');
      const emailInput = emailLabel.find('input');
      expect(emailLabel.text()).toBe('Email:');
      expect(emailInput.props().required).toBe(true);
      expect(emailInput.props().type).toBe('text');
    });

    it('has an password field', () => {
      const passwordLabel = component
        .find('form')
        .find('#passwordLabel')
        .find('label');
      const passwordInput = passwordLabel.find('input');
      expect(passwordLabel.text()).toBe('Password:');
      expect(passwordInput.props().required).toBe(true);
      expect(passwordInput.props().type).toBe('password');
    });

    it('has a "Login" button', () => {
      const loginButton = component.find('form').find('button');
      expect(loginButton.text()).toBe('Login');
      expect(loginButton.props().type).toBe('submit');
    });

    describe('when the Login form is filled out and the button is clicked', () => {
      const loginParams = { email: 'email@gmail.com', password: 'password123' };

      beforeEach(() => {
        const emailInput = component.find('#emailLabel').find('input');
        const passwordInput = component.find('#passwordLabel').find('input');
        const loginButton = component.find('form').find('button');

        emailInput.simulate('change', { target: { value: loginParams.email } });
        passwordInput.simulate('change', {
          target: { value: loginParams.password },
        });
        loginButton.simulate('click');
      });

      it('should log in the user', () => {
        expect(mockHandleLogin).toBeCalledWith(loginParams);
      });
    });
  });
});
