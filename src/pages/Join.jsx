import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const [uid, setuId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleJoinOk = () => {
    navigate("/JoinOk");
  };
  const handleJoin = () => {
    const userData = {
      id: uid,
      password,
      name,
      email,
      role: "user"
    };

    const queryString = Object.keys(userData)
      .map(key => `${key}=${encodeURIComponent(userData[key])}`)
      .join('&');

    const url = `http://3.39.190.51:8080/sign-api/sing-up?${queryString}`;

    axios.post(url)
      .then(response => {
        // 회원가입 성공 처리
        console.log('회원가입 성공:', response.data);
        localStorage.setItem('UserId', uid);
        handleJoinOk();
      })
      .catch(error => {
        // 회원가입 실패 처리
        console.error('회원가입 실패:', error.response);
        if (error.response.status === 401) {
          setErrorMessage('올바른 인증 정보를 제공해야 합니다.');
          // 인증 오류 처리 로직 추가
        } else {
          setErrorMessage('서버 오류: 요청에 문제가 있습니다.');
          // 기타 서버 오류 처리 로직 추가
        }
      });
  };

  return (
    <div>
      <h2>회원가입</h2>
      {errorMessage && <p>{errorMessage}</p>}
      아이디 : 
      <input
        type="text"
        placeholder="아이디"
        value={uid}
        onChange={e => setuId(e.target.value)}
      /><br/>
      비밀번호 : 
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={e => setPassword(e.target.value)}
      /><br/>
      이름 : 
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={e => setName(e.target.value)}
      /><br/>
      이메일 : 
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={e => setEmail(e.target.value)}
      /><br/>
      <button onClick={handleJoin}>가입하기</button>
    </div>
  );
};

export default Join;
