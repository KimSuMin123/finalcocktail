import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';

function Mbtistart () {
    const navigate = useNavigate();
    
    const Mbtiei = () => {
        navigate("/Mbtiei");
    }

    return(
        <div>
            <Header/>
            <h1>나에게 어울리는 칵테일은?</h1>
            <p>
                총 16개의 유형의 MBTI 성향을 기반으로<br/>
                나에게 어울리는 칵테일을 알아보아요
            </p>
            <button onClick={Mbtiei}>테스트 시작하기</button>
        </div>
    )
}

export default Mbtistart;