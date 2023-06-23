import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

const RefrigeratorPlus = () => {
  const [data, setData] = useState(null);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('UserId'); // Fetch userId from localStorage

  const handleAddItem = () => {
    const newItem = {
      productName,
      price
    };

    axios.post(`http://3.39.190.51:8080/order/addItem?uId=${userId}`, newItem, {
      headers: {
        'X-AUTH-TOKEN': token
      }
    })
      .then(response => {
        console.log('새 항목 추가:', response.data);
        // Refresh the data
        fetchData();
      })
      .catch(error => {
        console.error('항목 추가 실패:', error.response);
        // Handle error
      });
  };

  return (
    <div>
      <Header />
      {data ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td><img src={item.url} width="20px" alt="Product" /></td>
                  <td>{item.productName}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h2>Add Item</h2>
            <label>Product Name:</label>
            <input
              type="text"
              value={productName}
              onChange={e => setProductName(e.target.value)}
            /><br />
            <label>Price:</label>
            <input
              type="text"
              value={price}
              onChange={e => setPrice(e.target.value)}
            /><br />
            <button onClick={handleAddItem}>Add</button>
          </div>
        </div>
      ) : (
        <p>Please log in to use this feature!</p>
      )}
    </div>
  );
};

export default RefrigeratorPlus;
