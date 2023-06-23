import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

const Refrigerator = () => {
  const [data, setData] = useState(null);
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('UserId'); // Fetch userId from localStorage

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://3.39.190.51:8080/order/listByUserId?uId=${userId}`, {
          headers: {
            'X-AUTH-TOKEN': token
          }
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (token && userId) { // Check if both token and userId exist
      fetchData();
    }
  }, [token, userId]); // Include userId in the dependency array

  return (
    <div>
      <Header/>
    {data ? (
      <table>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <tr><img src={item.url} width="20px"></img></tr>
              <tr>{item.productName}</tr>
              <tr>{item.price}</tr>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>로그인 후 이용해주세요!!</p>
    )}
  </div>
  );
};

export default Refrigerator;
