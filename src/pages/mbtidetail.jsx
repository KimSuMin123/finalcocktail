import React, { useState, useEffect } from 'react';
import Header from './Header';
import '../css/Mbti.css';
import Map from './map';

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
      <div id="Mbtistart">
      <h3 id = "MbtistartTitle">MBTI Result</h3>
      {mbtiData ? (
        <div id="MbtistartTxt1">
          <div id="MbtistartTxt3">
          <img id="MbtistartImg" src={mbtiData.url} alt="MBTI Image" />
          <div id= "mbtimap"><Map/></div>
          </div>
          <div id = "MbtistartTxt2">
          <p>Number: {mbtiData.number}<br/></p>
          <p>MBTI: {mbtiData.mbti}<br/></p>
          <p>Name: {mbtiData.name}<br/></p>
          <p>Keyword: {mbtiData.keyword}<br/></p>
          <p>Explanation: {mbtiData.ex}<br/></p>
          <p>Best: {mbtiData.best}<br/></p>
          <p>Worst: {mbtiData.worst}<br/></p>
          </div>
        </div>
      ) : (
        <p id="MbtistartTxt">Loading...</p>
      )}

      </div>
    </div>
  );
};

export default MbtiDetial;
