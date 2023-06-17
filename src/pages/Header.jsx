import Logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const RecommendStart = () => {
      navigate("/RecommendStart");
    };
    const Login = () => {
      navigate("/Login");
    };
    const RandomPick = () =>{
      navigate("/RandomPick")
    }
    const Refrigerator = () =>{
      navigate("/Refrigerator")
    }
    const Main = () =>{
      navigate("/")
    }
    return(
        <div class = "Headermodel">
            <img id ="Headerlogo" onClick={Main} src={Logo}></img>
          <button id = "Headerbuttonone" onClick={Main}>칵테일 메인</button>
          <button id = "Headerbuttontwo" onClick={Refrigerator}>냉장고</button>
          <button id = "Headerbuttontwo" onClick={RecommendStart}>칵테일 추천</button>
          <button id = "Headerbuttontwo" onClick={RandomPick}>랜덤 칵테일 고르기</button>
          <button id = "Headerbuttonthree" onClick={Login}>로그인</button>
    </div>
    )
}

export default Header;