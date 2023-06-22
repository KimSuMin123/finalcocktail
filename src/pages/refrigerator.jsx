import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://3.39.190.51:8080/order/listByUserId?uId=user1', {
          headers: {
            'X-AUTH-TOKEN': token
          }
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

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

export default MyComponent;