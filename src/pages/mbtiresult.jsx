import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header';
import pic1 from "../img/pic1.png";

function Mbtiresult () {
    const EI = window.localStorage.getItem('MBTIEI')
    const NS = window.localStorage.getItem('MBTINS')
    const TF = window.localStorage.getItem('MBTITF')
    const JP = window.localStorage.getItem('MBTIJP')
    const MBTI = window.localStorage.setItem("MBTI", JSON.stringify(EI+NS+TF+JP))
    const MBTIResult = window.localStorage.getItem('MBTI') 

    const navigate = useNavigate();
    const Mbtistart = () => {
      navigate("/Mbtistart");
    };
  const Mbtidetail = () => {
    navigate("/Mbtidetail")
  }

    return(
        <div>
            <Header/>
            <p class = "Mbtiresult">
                <div class = "MbtiresultL">
                    <img class = "MbtiresultLpic" src={pic1}></img>
                </div>
                <div class = "Mbtiresultr">
                    <p id = "Mbtiresult1">
                        당신은...<br/>
                        메로나 칵테일<br/>
                        #메로나 #소주 #칠성사이다<br/>
                    </p>
                    <p id = "Mbtiresult2">
                        피치크러쉬가 생각 나는 당신은 <br/>
                        통통 튀는 매력으로 사람들을 <br/>
                        사로 잡는군요
                    </p>
                    <div class= "Mbtiresultpic">
                    <p id = "Mbtiresultpic1">
                        Best <br/>
                        <img id = "Mbtiresultpic" src={pic1}></img>
                    </p>
                    <p id = "Mbtiresultpic1">
                        Worst <br/>
                        <img id = "Mbtiresultpic" src={pic1}></img>
                    </p>
                    </div>
                    <p id = "Mbtiresult3">
                        <button id='MbtiresultButton1' onClick={Mbtistart}>다시하기</button>
                       <button id='MbtiresultButton2' onClick={Mbtidetail}>만족하기</button>
                    </p>
                </div>
                
            </p>
        </div>
    )
}

export default Mbtiresult;