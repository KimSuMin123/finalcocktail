import React, { useState } from 'react';
import axios from 'axios';

function Mycomponent() {
  const [title, setTitle] = useState('');
  const [recipe, setRecipe] = useState('');
  const [ringredients, setRingredients] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {

    const formData = {
      'title': title,
      'recipe': recipe,
      'ringredients': ringredients,
      'url': url,
    };

    const headers = {
      'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5pIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTY4NzUxMzU1NywiZXhwIjoxNjkwMTA1NTU3fQ.tmr_R5PkoefKHp31TiVCkI-1PpTXXF3DBSIBhAVe6dM',
      'accept': '*/*',
    };

    console.log("000000000000000000000000000000000000000000~");


    //const axios = require('axios');
    axios.post('http://3.39.190.51:8080/board', formData)
    //axios.post('http://3.39.190.51:8080/board', formData, { headers })
//axios.post('http://3.39.190.51:8080/board', { headers })
      .then(response => {

        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        
        //console.log('response.data');
        console.log(response.data);
        // 성공적으로 게시글이 생성되었을 때 처리 로직 추가
        setTitle('');
        setRecipe('');
        setRingredients('');
        setUrl('');
      })
      .catch(error => {
        console.log("???????????????????????????~~");
        console.error(error);
        document.write(error);
        // 오류 처리
      });

      

    console.log("77777777777777777777777777777777777777777~");
  };

  return (
    <div>
      <h1>Create Board</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <br />
        <label>Recipe:</label>
        <input type="text" value={recipe} onChange={e => setRecipe(e.target.value)} />
        <br />
        <label>Ringredients:</label>
        <input type="text" value={ringredients} onChange={e => setRingredients(e.target.value)} />
        <br />
        <label>URL:</label>
        <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Mycomponent;
