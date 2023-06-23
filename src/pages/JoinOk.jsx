import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";


function JoinOk() {
  const userName = window.localStorage.getItem("UserId");
  return (
    <div>
      {userName}님 회원가입을 축하드립니다.
      <NavLink to="/Login">로그인 하러 가기</NavLink>
    </div>
  );
}
export default JoinOk;