import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header';

function Mbtitf () {

    const navigate = useNavigate();
    
    const Mbtijp = () => {
        navigate("/Mbtijp");
    }

    // const T = window.localStorage.getItem('T')
    // const F = window.localStorage.getItem('F')

    return(
        <div>
            <Header/>
            <p>Q3</p>
            <p>판단과 결정 기능은?</p>
            <button onClick={() => {
               window.localStorage.setItem('MBTITF','T');
            //    window.localStorage.setItem("T", T + 1);
            }}>
                사고형
            </button>
            <button onClick={() => {
               window.localStorage.setItem('MBTITF','F');
            //    window.localStorage.setItem("F", F + 1);
            }}>
                감정형
            </button>
            <button onClick={Mbtijp}>다음 문제 풀기</button>
        </div>
    )
}

export default Mbtitf;