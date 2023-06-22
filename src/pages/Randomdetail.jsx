import React, { useEffect, useState } from 'react';
import Header from './Header';

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
      {data ? (
        <div>
          <h3>Random Result</h3>
          <p>Name: {data.name}</p>
          <p>ingredients: {data.ingredients}</p>
          <p>instruction: {data.instruction}</p>
          <p>alcohol: {data.alcohol}</p>
          <p>sweet: {data.sweet}</p>
          <img src={data.url} alt="Random Image" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Randomdetail;
