import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';
import axios from 'axios';

function IngredientStart() {
  const navigate = useNavigate();
  const Mbtistart = () => {
    navigate("/Mbtistart");
  };
  const IngredientDetail = () => {
    navigate("/IngredientDetail");
  };
  const [s1, sets1] = useState('');
  const [s2, sets2] = useState('');
  const [s3, sets3] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleJoin = () => {
    const userData = {
      s1,
      s2,
      s3
    };

    const queryString = Object.keys(userData)
      .map(key => `${key}=${encodeURIComponent(userData[key])}`)
      .join('&');

    const url = `http://3.39.190.51:8080/cocktail/ingredientsContain?${queryString}`;

    axios.get(url)
      .then(response => {
        // 재료처리 성공 처리
        console.log('재료처리 성공:', response.data);
        setResponseData(response.data);
      })
      .catch(error => {
        // 재료처리 실패 처리
        console.error('재료처리 실패:', error.response);
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
      <Header />
      <h1>Cocktail</h1>
      <table>
        <tr>
          <th>술</th>
          <th>과일</th>
          <th>음료</th>
          <th>재료</th>
        </tr>
        <tr>
          <td>소주</td>
          <td>사과</td>
          <td>오렌지쥬스</td>
          <td>아이스크림</td>
        </tr>
        <tr>
          <td>맥주</td>
          <td>라임</td>
          <td>사과쥬스</td>
          <td>설탕</td>
        </tr>
        <tr>
          <td>와인</td>
          <td>레몬</td>
          <td>탄산수</td>
          <td>후추</td>
        </tr>
        <tr>
          <td>양주</td>
        </tr>
      </table>
      {errorMessage && <p>{errorMessage}</p>}
      재료1 :
      <input
        type="text"
        placeholder="재료1"
        value={s1}
        onChange={e => sets1(e.target.value)}
      /><br />
      재료2 :
      <input
        type="text"
        placeholder="재료2"
        value={s2}
        onChange={e => sets2(e.target.value)}
      /><br />
      재료3 :
      <input
        type="text"
        placeholder="재료3"
        value={s3}
        onChange={e => sets3(e.target.value)}
      /><br />
      <button onClick={handleJoin}>
        찾아보기
      </button>
      {responseData && responseData.map(item => (
  <div>
     <tr key={item.number}>
     <td><img id="MainImg" src={item.url} alt={item.name} /></td>
                <td>{item.name}</td>
                <td>{item.ingredients}</td>
                <td>{item.instruction}</td>
                <td>{item.alcohol}</td>
                <td>{item.sweet}</td>
     </tr>
      
  </div>
))}

    </div>
  );
}

export default IngredientStart;
