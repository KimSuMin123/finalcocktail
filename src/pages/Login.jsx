import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://example.com/login', {
        username: username,
        password: password
      });
      const token = response.data.token;
      setToken(token);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleLogout = () => {
    setToken('');
  };

  return (
    <div>
      <div>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        {token ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Login;
