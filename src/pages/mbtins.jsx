import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header';

function Mbtins () {

    const navigate = useNavigate();
    
    const Mbtitf = () => {
        navigate("/Mbtitf");
    }
    // const N = window.localStorage.getItem('N')
    // const S = window.localStorage.getItem('S')
    return(
        <div>
            <Header/>
            <p>Q2</p>
            <p>인식의 기능은?</p>
            <button onClick={() => {
               window.localStorage.setItem('MBTINS','N');
            //    window.localStorage.setItem("N", N + 1);
            }}>
                직관형
            </button>
            <button onClick={() => {
               window.localStorage.setItem('MBTINS','S');
            //    window.localStorage.setItem("S", (S + 1));
            }}>
                감각형
            </button>
            <button onClick={Mbtitf}>다음 문제 풀기</button>
        </div>
    )
}

export default Mbtins;