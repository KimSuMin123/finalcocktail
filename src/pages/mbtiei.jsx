import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header';

function Mbtiei () {

    const navigate = useNavigate();
    const Mbtins = () => {
        navigate("/Mbtins");
    }

    return(
        <div>
            <Header/>
            <p>Q1</p>
            <p>에너지를 얻는 방법은?</p>
            <button onClick={() => {
               window.localStorage.setItem('MBTIEI','E');
            }}>
                외향적
            </button>
            <button onClick={() => {
               window.localStorage.setItem('MBTIEI','I');
            }}>
                내향적
            </button>
            <button onClick={Mbtins}>다음 문제 풀기</button>
        </div>
    )
}

export default Mbtiei;