import React, { useState, useEffect } from 'react';
import Header from './Header';

const MbtiDetial = () => {
  const [mbtiData, setMbtiData] = useState(null);

  useEffect(() => {
    const fetchMbtiData = async () => {
      const mbtiValue = localStorage.getItem('mbti');
      const response = await fetch(`http://3.39.190.51:8080/mbti/list`);
      const data = await response.json();

      // Find the matching MBTI value in the data array
      const matchingMbti = data.find((item) => item.mbti === mbtiValue);
      setMbtiData(matchingMbti);
    };

    fetchMbtiData();
  }, []);

  return (
    <div>
      <Header/>
      <h3>MBTI Result</h3>
      {mbtiData ? (
        <div>
          <p>Number: {mbtiData.number}</p>
          <p>MBTI: {mbtiData.mbti}</p>
          <p>Name: {mbtiData.name}</p>
          <p>Keyword: {mbtiData.keyword}</p>
          <p>Explanation: {mbtiData.ex}</p>
          <p>Best: {mbtiData.best}</p>
          <p>Worst: {mbtiData.worst}</p>
          <img src={mbtiData.url} alt="MBTI Image" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MbtiDetial;
