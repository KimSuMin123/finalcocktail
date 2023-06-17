import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';

function IngredientStart () {

    const navigate = useNavigate();
    const Mbtistart = () => {
      navigate("/Mbtistart");
    };
    const IngredientDetail = () => {
        navigate("/IngredientDetail")
    }
    return(
        <div>
            <Header/>
            <h1>Cocktail</h1>
            <table>
                <tr>
                    <th>술</th>
                    <th>과일</th>
                    <th>음료</th>
                    <th>재료</th>
                </tr>
                <tr>
                    <td>소주</td>
                    <td>사과</td>
                    <td>오렌지쥬스</td>
                    <td>아이스크림</td>
                </tr>
                <tr>
                    <td>맥주</td>
                    <td>라임</td>
                    <td>사과쥬스</td>
                    <td>설탕</td>
                </tr>
                <tr>
                    <td>와인</td>
                    <td>레몬</td>
                    <td>탄산수</td>
                    <td>후추</td>
                </tr>
                <tr>
                    <td>양주</td>
                </tr>
            </table>
            <button id='IngredientDetail' onClick={IngredientDetail}>
                찾아보기
            </button>
        </div>
    )
}

export default IngredientStart