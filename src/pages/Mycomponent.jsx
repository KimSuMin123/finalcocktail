import React, { useState } from 'react';
import axios from 'axios';

const Mycomponent = () => {
  const [s1, sets1] = useState('');
  const [s2, sets2] = useState('');
  const [s3, sets3] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleJoin = () => {
    const userData = {
      s1,
      s2,
      s3
    };

    const queryString = Object.keys(userData)
      .map(key => `${key}=${encodeURIComponent(userData[key])}`)
      .join('&');

    const url = `http://3.39.190.51:8080/cocktail/ingredientsOr?${queryString}`;

    axios.post(url)
      .then(response => {
        // 회원가입 성공 처리
        console.log('회원가입 성공:', response.data);
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
      S1: 
      <input
        type="text"
        placeholder="S1"
        value={s1}
        onChange={e => sets1(e.target.value)}
      /><br/>
      S2: 
      <input
        type="text"
        placeholder="S2"
        value={s2}
        onChange={e => sets2(e.target.value)}
      /><br/>
      S3: 
      <input
        type="text"
        placeholder="S3"
        value={s3}
        onChange={e => sets3(e.target.value)}
      /><br/>
      <button onClick={handleJoin}>가입하기</button>
    </div>
  );
};

export default Mycomponent;
