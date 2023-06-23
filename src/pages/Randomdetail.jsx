import React, { useEffect, useState } from 'react';
import Header from './Header';
import Map from './map';

function Randomdetail() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchRandomData = async () => {
      const randomComponent = localStorage.getItem('randomComponent');
      const response = await fetch('http://3.39.190.51:8080/cocktail/list');
      const mbtiRandom = await response.json();

      // Find the matching MBTI value in the mbtiRandom array
      const matchingRandom = mbtiRandom.find((item) => item.name === randomComponent);
      setData(matchingRandom);
    };

    fetchRandomData();
  }, []);

  return (
    <div>
      <Header />
      <div id="Mbtistart">
      <h3 id = "MbtistartTitle">Random Result</h3>
      {data ? (
        <div id="MbtistartTxt1">
        <div id="MbtistartTxt3">
        <img id="MbtistartImg" src={data.url} alt="Random Image" />
        <div id= "mbtimap"><Map/></div>
          </div>
          <div id = "MbtistartTxt2">
          <p>Name: {data.name}</p>
          <p>ingredients: {data.ingredients}</p>
          <p>instruction: {data.instruction}</p>
          <p>alcohol: {data.alcohol}</p>
          <p>sweet: {data.sweet}</p>
          </div>
        </div>
      ) : (
        <p id="MbtistartTxt">Loading...</p>
      )}
    </div>
    </div>
  );
}

export default Randomdetail;
