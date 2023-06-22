import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import React from 'react';
import axios from 'axios';
import Logo from "../img/logo.png";
import "../css/Main.css";
import Header from "./Header";

function Main() {
  const navigate = useNavigate();
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await axios.get('http://3.39.190.51:8080/cocktail/list');
        setCocktails(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCocktails();
  }, []);

  const handleSearch = () => {
    const filteredCocktails = cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setCocktails(filteredCocktails);
  };

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다: {error.message}</div>;
  if (!cocktails || cocktails.length === 0) return <div>데이터가 없습니다.</div>;

  return (
  
      <div>
        <Header />
        <div>
          <input
            type="text"
            placeholder="이름으로 검색"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>검색</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>사진</th>
              <th>이름</th>
              <th>재료</th>
              <th>만드는 법</th>
              <th>도수</th>
              <th>당도</th>
            </tr>
          </thead>
          <tbody>
            {cocktails.map(cocktail => (
              <tr key={cocktail.number}>
                <td><img id="MainImg" src={cocktail.url} alt={cocktail.name} /></td>
                <td>{cocktail.name}</td>
                <td>{cocktail.ingredients}</td>
                <td>{cocktail.instruction}</td>
                <td>{cocktail.alcohol}</td>
                <td>{cocktail.sweet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}

export default Main;
