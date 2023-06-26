import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const BoardPlus = () => {
  const [title, setTitle] = useState('');
  const [recipe, setRecipe] = useState('');
  const [ringredients, setRIngredients] = useState('');
  const [url, setURL] = useState('');
  const navigate = useNavigate();

  const handleBoard= () => {
    navigate("/Board");
  };
  const handleRequest = () => {
    const token = localStorage.getItem('token'); // Retrieve token from local storage

    const urlParams = `?title=${encodeURIComponent(title)}&recipe=${encodeURIComponent(recipe)}&ringredients=${encodeURIComponent(ringredients)}&url=${encodeURIComponent(url)}`;

    const dataurl = `http://3.39.190.51:8080/board${urlParams}`;

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
      handleBoard();
  };

  return (
    <div>
      <Header/>
      <div id = "ingredientinput6">
      <h2>게시글 쓰기</h2>
      제목 : 
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      레시피 :
      <input
        type="text"
        placeholder="Recipe"
        value={recipe}
        onChange={e => setRecipe(e.target.value)}
      />
      <br />
      재료 :
      <input
        type="text"
        placeholder="Ingredients"
        value={ringredients}
        onChange={e => setRIngredients(e.target.value)}
      />
      <br />
      이미지 :
      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={e => setURL(e.target.value)}
      />
      <br />
      <button id= "JoinButton"onClick={handleRequest}>글 저장 하기</button>
    </div>
    </div>
      
  );
};

export default BoardPlus;