import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import React from 'react';
import '../src/App.css';
import Main from "./pages/Main";
import Mbtistart from "./pages/mbtistart";
import Mbtiresult from "./pages/mbtiresult";
import Join from "./pages/Join";
import JoinOk from "./pages/JoinOk";
import RandomPick from "./pages/RandomPick";
import Refrigerator from "./pages/refrigerator";
import Mbtidetail from "./pages/mbtidetail";
import RecommendStart from "./pages/RecommendStart";
import IngredientStart from "./pages/IngredientStart";
import IngredientDetail from "./pages/IngredientDetail";
import Login from "./pages/Login";
import MbtiTest from "./pages/MbtiTest";
import Randomdetail from "./pages/Randomdetail";
import Header from "./pages/Header";

function App() {
  return (
    <div id="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/Main" element={<Main />} />
          <Route path="/Mbtistart" element={<Mbtistart />} />
          <Route path="/Mbtiresult" element={<Mbtiresult />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/JoinOk" element={<JoinOk />} />
          <Route path="/" element={<RandomPick />} />
          <Route path="/Refrigerator" element={<Refrigerator />} />
          <Route path="/Mbtidetail" element={<Mbtidetail />} />
          <Route path="/IngredientStart" element={<IngredientStart />} />
          <Route path="/RecommendStart" element={<RecommendStart />} />
          <Route path="/IngredientDetail" element={<IngredientDetail />} />
          <Route path="/MbtiTest" element={<MbtiTest />} />
          <Route path="/Randomdetail" element={<Randomdetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
