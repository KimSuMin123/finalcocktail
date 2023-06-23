import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';
import '../css/Mbti.css';
function Mbtistart () {
    const navigate = useNavigate();
    
    const MbtiTest = () => {
        navigate("/MbtiTest");
    }

    return(
        <div>
            <Header/>
            <div id = "Mbtistart">
            <h1 id = "MbtistartTitle">나에게 어울리는 칵테일은?</h1>
            <p id = "MbtistartTxt">
                총 16개의 유형의 MBTI 성향을 기반으로<br/>
                나에게 어울리는 칵테일을 알아보아요
            </p>
            <button id="MbtiButton" onClick={MbtiTest}>테스트 시작하기</button>
            </div>
        </div>
    )
}

export default Mbtistart;