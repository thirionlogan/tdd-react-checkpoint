import { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <label id='emailLabel'>
          Email:
          <input
            type='text'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <label id='passwordLabel'>
          Password:
          <input
            type='password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <button onClick={() => handleLogin({ email, password })} type='submit'>
          Login
        </button>
      </form>
    </>
  );
};
export default Login;
