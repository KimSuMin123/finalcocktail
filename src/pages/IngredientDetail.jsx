import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';
import pic1 from '../img/pic1.png';
import '../css/IngredientDetail.css';

function IngredientDetail () {

    return(
        <div>
            <Header/>
            <div className='IngredientDetail'>
                <div id = "IngredientDetailimg" width={200}>
                    <img src={pic1} width={200}></img>
                    <h3>메로나 칵테일</h3>
                    <p>#메로나 칵테일 #소주 #칠성 사이다</p>
                </div>
                <div id = "IngredientDetailimg" width={200}>
                    <img src={pic1} width={200}></img>
                    <h3>메로나 칵테일</h3>
                    <p>#메로나 칵테일 #소주 #칠성 사이다</p>
                </div>
                <div id = "IngredientDetailimg" width={200}>
                    <img src={pic1} width={200}></img>
                    <h3>메로나 칵테일</h3>
                    <p>#메로나 칵테일 #소주 #칠성 사이다</p>
                </div>
            </div>
      </div>
    )
}

export default IngredientDetail