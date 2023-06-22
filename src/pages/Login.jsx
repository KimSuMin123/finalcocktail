import React, { useState } from 'react';
import axios from 'axios';

const Join = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleJoin = () => {
    const queryString = `http://3.39.190.51:8080/sign-api/sing-in?id=${encodeURIComponent(id)}&password=${encodeURIComponent(password)}`;

    axios.post(queryString)
      .then(response => {
        // 로그인 성공 처리
        console.log('로그인 성공:', response.data);
        const token = response.data.token;
        localStorage.setItem('token', token);
      })
      .catch(error => {
        // 로그인 실패 처리
        console.error('로그인 실패:', error.response);
        setErrorMessage('아이디 또는 비밀번호가 잘못되었습니다.');
         
      });
  };

  return (
    <div>
      <h2>로그인</h2>
      {errorMessage && <p>{errorMessage}</p>}
      아이디:
      <input
        type="text"
        placeholder="아이디"
        value={id}
        onChange={e => setId(e.target.value)}
      /><br/>
      비밀번호:
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={e => setPassword(e.target.value)}
      /><br/>
      <button onClick={handleJoin}>로그인</button>
    </div>
  );
};

export default Join;
