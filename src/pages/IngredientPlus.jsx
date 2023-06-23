import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import"../css/ingredient.css"

const Mycomponent = () => {
  const [data, setData] = useState('');

  const navigate = useNavigate();

  const handlerefrigerator = () => {
    navigate("/refrigerator");
  };

  const handleRequest = (name) => {
    const token = localStorage.getItem('token'); // Retrieve token from local storage

    const urlParams = `?name=${encodeURIComponent(name)}`;

    const dataurl = `http://3.39.190.51:8080/order/ingredientsName${urlParams}`;

    const headers = {
      'Accept': '*/*',
      'X-AUTH-TOKEN': token
    };

    axios.post(dataurl, '', { headers })
      .then(response => {
        console.log('Request successful:', response.data);
        // Handle the response here
      })
      .catch(error => {
        console.error('Request failed:', error.response);
        // Handle the error here
      });

    handlerefrigerator();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://3.39.190.51:8080/ingredients/list');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {data ? (
        <table>
          <tbody>
  <div className="card-container">
    {data.map((item) => (
      <tr key={item.number}>
        <td><img id = "ingredientImg" src={item.url} width="50px" height="50px" alt="ingredient" /></td>
        <td id = "ingredientTxt">{item.name}</td>
        <td>
          <button id = "ingredientButton1" onClick={() => handleRequest(item.name)}>등록하기</button>
        </td>
      </tr>
    ))}
  </div>
</tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Mycomponent;
