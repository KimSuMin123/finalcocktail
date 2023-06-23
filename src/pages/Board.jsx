import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Mycomponent from './Mycomponent';

const Board = () => {
  const [data, setData] = useState(null);

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
      {data ? (
        <table>
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
    </div>
  );
};

export default Board;