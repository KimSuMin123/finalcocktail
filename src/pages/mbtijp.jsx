import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header';

function Mbtijp () {

    const navigate = useNavigate();
    
    const Mbtiresult = () => {
        navigate("/Mbtiresult");
    }
    // const J = window.localStorage.getItem('J')
    // const P = window.localStorage.getItem('P')
    return(
        <div>
            <Header/>
            <p>Q4</p>
            <p>생활의 이해 양식은?</p>
            <button onClick={() => {
               window.localStorage.setItem('MBTIJP','J');
            //    window.localStorage.setItem("J", J + 1);
            }}>
                판단형
            </button>
            <button onClick={() => {
               window.localStorage.setItem('MBTIJP','P');
            //    window.localStorage.setItem("P", P + 1);
            }}>
                인식형
            </button>
            <button onClick={Mbtiresult}>다음 문제 풀기</button>
        </div>
    )
}

export default Mbtijp;