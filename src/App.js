import { Routes, Route, BrowserRouter } from "react-router-dom";
import Mbtistart from "./pages/mbtistart";
import Mbtiei from "./pages/mbtiei";
import Mbtins from "./pages/mbtins";
import Mbtitf from "./pages/mbtitf";
import Mbtijp from "./pages/mbtijp";
import Mbtiresult from "./pages/mbtiresult";
import Join from "./pages/Join";
import JoinOk from "./pages/JoinOk";
import Main from "./pages/Main";
import Login from "./Login";
import RandomPick from "./pages/RandomPick";
import Refrigerator from "./pages/refrigerator";
import Mbtidetail from "./pages/mbtidetail";
import RecommendStart from "./pages/RecommendStart";
import IngredientStart from "./pages/IngredientStart";
import IngredientDetail from "./pages/IngredientDetail";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/Mbtistart" element ={<Mbtistart/>}/>
                <Route path="/Mbtiei" element ={<Mbtiei/>}/>
                <Route path="/Mbtins" element ={<Mbtins/>}/>
                <Route path="/Mbtitf" element = {<Mbtitf/>}/>
                <Route path="/Mbtijp" element = {<Mbtijp/>}/>
                <Route path="/Mbtiresult" element = {<Mbtiresult/>}/>
                <Route path="/Login" element = {<Login/>}/>
                <Route path='/Join' element={<Join/>}/>
                <Route path='/JoinOk' element={<JoinOk/>}/>
                <Route path="/RandomPick" element={<RandomPick/>}/>
                <Route path="/Refrigerator" element={<Refrigerator/>}/>
                <Route path="/Mbtidetail" element={<Mbtidetail/>}/>
                <Route path="/IngredientStart" element={<IngredientStart/>}/>
                <Route path="/RecommendStart" element={<RecommendStart/>}/>
                <Route path="/IngredientDetail" element={<IngredientDetail/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;