import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';

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
            <p>
                MBTI 기반으로<br/>
                칵테일 추천
                <button id='mbtistartbutton' onClick={Mbtistart}>
                    Start
                </button>
            </p>
            <p>
                좋아하는 재료 기반으로<br/>
                칵테일 추천
                <button id='IngredientStartbutton' onClick={IngredientStart}>
                    Start
                </button>
            </p>
        </div>
    )
}

export default RecommendStart