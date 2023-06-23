import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import "../css/Board.css"

function IngredientStart() {
  const navigate = useNavigate();
  const Mbtistart = () => {
    navigate('/Mbtistart');
  };
  const IngredientDetail = () => {
    navigate('/IngredientDetail');
  };
  const [s1, sets1] = useState('');
  const [s2, sets2] = useState('');
  const [s3, sets3] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [randomRecommendation, setRandomRecommendation] = useState(null);

  const handleJoin = () => {
    const userData = {
      s1,
      s2,
      s3,
    };

    const queryString = Object.keys(userData)
      .map((key) => `${key}=${encodeURIComponent(userData[key])}`)
      .join('&');

    const url = `http://3.39.190.51:8080/cocktail/ingredientsContain?${queryString}`;

    axios
      .get(url)
      .then((response) => {
        // 재료처리 성공 처리
        console.log('재료처리 성공:', response.data);
        setResponseData(response.data);

        // 전체보기로 표시
        setRandomRecommendation(null);
      })
      .catch((error) => {
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

  const handleRandomRecommendation = () => {
    if (responseData && responseData.length > 0) {
      const randomIndex = Math.floor(Math.random() * responseData.length);
      const recommendation = responseData[randomIndex];
      setRandomRecommendation(recommendation);
    }
  };

  return (
    <div>
      <Header />
      <h1>Cocktail</h1>
      <div id = "ingredientone">
      
      <div id = "ingredienttwo">
      <table id="BoardTable">
        <thead>
          <tr id= "Boardtr">
            <th>술</th>
            <th>과일</th>
            <th>음료</th>
            <th>재료</th>
          </tr>
        </thead>
        <tbody>
          <tr id= "Boardtr">
            <td>소주</td>
            <td>사과</td>
            <td>오렌지쥬스</td>
            <td>아이스크림</td>
          </tr>
          <tr id= "Boardtr">
            <td>맥주</td>
            <td>라임</td>
            <td>사과쥬스</td>
            <td>설탕</td>
          </tr>
          <tr id= "Boardtr">
            <td>와인</td>
            <td>레몬</td>
            <td>탄산수</td>
            <td>후추</td>
          </tr>
          <tr>
            <td>양주</td>
          </tr>
        </tbody>
      </table>
      </div>
     
      {errorMessage && <p>{errorMessage}</p>}
      <div id = "ingredientinput">
        재료1:
        <input type="text" placeholder="재료1" value={s1} onChange={(e) => sets1(e.target.value)} />
        <br />
        재료2:
        <input type="text" placeholder="재료2" value={s2} onChange={(e) => sets2(e.target.value)} />
        <br />
        재료3:
        <input type="text" placeholder="재료3" value={s3} onChange={(e) => sets3(e.target.value)} />
        <br />
        <button id="LoginButton" onClick={handleJoin}>검색하기</button><br></br>
        <button id="LoginButton" onClick={handleRandomRecommendation}>검색 결과 중 랜덤 추천</button>
      </div>
      </div>
      {responseData && (
        <div id = "tabletwo">
          <table>
            <thead>
              <tr>
                <th>이미지</th>
                <th>이름</th>
                <th>재료</th>
                <th>조리 방법</th>
                <th>알코올 도수</th>
                <th>단맛</th>
              </tr>
            </thead>
            <tbody>
              
          
              {responseData.map((item) => (
                <tr key={item.number}>
                  <td>
                    <img id="MainImg" src={item.url} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.ingredients}</td>
                  <td>{item.instruction}</td>
                  <td>{item.alcohol}</td>
                  <td>{item.sweet}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {randomRecommendation && (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>이미지</th>
                    <th>이름</th>
                    <th>재료</th>
                    <th>조리 방법</th>
                    <th>알코올 도수</th>
                    <th>단맛</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img id="MainImg" src={randomRecommendation.url} alt={randomRecommendation.name}/>
                    </td>
                    <td>{randomRecommendation.name}</td>
                    <td>{randomRecommendation.ingredients}</td>
                    <td>{randomRecommendation.instruction}</td>
                    <td>{randomRecommendation.alcohol}</td>
                    <td>{randomRecommendation.sweet}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default IngredientStart;

