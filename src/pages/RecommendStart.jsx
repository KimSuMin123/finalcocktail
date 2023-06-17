import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';
import '../css/Recommend.css';

function RecommendStart () {

    const navigate = useNavigate();
    const Mbtistart = () => {
      navigate("/Mbtistart");
    };
    const IngredientStart = () => {
        navigate("/IngredientStart");
    };
    return(
        <div>
            <Header/>
            <div class='RecommendAll'>
                <p id = "RecommendBack"> 
                    MBTI 기반으로<br/>
                    칵테일 추천<br/>
                    <button id='Recommendbutton' onClick={Mbtistart}>
                        →
                    </button>
                </p>
                <p id = "RecommendBack">
                    좋아하는 재료 기반으로<br/>
                    칵테일 추천<br/>
                    <button id='Recommendbutton' onClick={IngredientStart}>
                        →
                    </button>
                </p>
            </div>
        </div>
    )
}

export default RecommendStart