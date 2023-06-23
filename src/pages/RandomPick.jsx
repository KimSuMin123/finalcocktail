import Header from "./Header";
import Logo from "../img/logo.png";
import '../css/RandomPick.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RandomPick() {
  const [data, setData] = useState([]);
  const [randomComponent, setRandomComponent] = useState(null);
  const navigate = useNavigate();
  const Randomdetail = () => {
    navigate("/Randomdetail");
    localStorage.setItem('randomComponent', randomComponent.name);
}
const handleRefresh = () => {
  window.location.reload();
};
  useEffect(() => {
    // API로부터 데이터를 가져오는 비동기 함수
    const fetchData = async () => {
      try {
        const response = await fetch('http://3.39.190.51:8080/cocktail/list');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0 && !randomComponent) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const selectedComponent = data[randomIndex];
      setRandomComponent(selectedComponent);
    }
  }, [data, randomComponent]);

  return (
    <div>
      <Header/>
      <div class="RandomAll">
        <h1 id="RandomName">랜덤 칵테일 추천</h1>
        {randomComponent && (
          <div >
            <img id="RandomImg" src={randomComponent.url}></img>
            <h2 id="RandomText">{randomComponent.name}</h2>
           <div id = "RamdomButton">
           <button id='RandomButton1' onClick={handleRefresh}>다시 추천받기</button>
            <button id='RandomButton2' onClick={Randomdetail}>자세히 보기</button>
</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomPick;