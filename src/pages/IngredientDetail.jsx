import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';
import pic1 from '../img/pic1.png';
import '../css/IngredientDetail.css';

function IngredientDetail () {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideInterval = 5000; // 5초
  
    const slides = [
        <div key={0}>
            <img src={pic1} width={200}></img>
            <h3>메로나 칵테일</h3>
            <p>#메로나 칵테일 #소주 #칠성 사이다</p>
        </div>,
        <div key={1}>
            <img src={pic1} width={200}></img>
            <h3>메로나 칵테일</h3>
            <p>#메로나 칵테일 #소주 #qweqwe</p>
        </div>,
        <div key={2}>
            <img src={pic1} width={200}></img>
            <h3>메로나 칵테일</h3>
            <p>#메로나 칵테일 #소주 #칠성 사이다</p>
        </div>,
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
      }, slideInterval);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return (<div><Header/><div className="slider">{slides[currentSlide]}</div></div>);
  };
  
   
export default IngredientDetail