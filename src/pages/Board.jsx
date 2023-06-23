import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import BoardPlus from './BoardPlus';
import "../css/Board.css"
const Board = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleBoardPlus= () => {
    navigate("/BoardPlus");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://3.39.190.51:8080/board/list');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <Header/>
        <h1 id = "BoardName">게시판</h1>
      {data ? (
        <table id="BoardTable">
          <thead>
            <tr>
              <th>Title</th>
              <th>Recipe</th>
              <th>Ingredients</th>
              <th>URL</th>
              <th>User ID</th>
              <th>User Name</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.recipe}</td>
                <td>{item.ringredients}</td>
                <td>{item.url}</td>
                <td>{item.userId}</td>
                <td>{item.userName}</td>
                <td>{item.createAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
      <button id="Boardbutton" onClick={handleBoardPlus}>추가하기</button>
    </div>
  );
};

export default Board;