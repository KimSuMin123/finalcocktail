import Logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Login");
  };

  const handleRandomPick = () => {
    navigate("/");
  };

  const handleRefrigerator = () => {
    navigate("/Refrigerator");
  };

  const handleRecommendStart = () => {
    navigate("/RecommendStart");
  };

  const handleMain = () => {
    navigate("/Main");
  };
  const handleBoard = () => {
    navigate("/Board");
  };
  const handleLogout = () => {
    // 로그아웃 시 토큰 삭제
    localStorage.removeItem("token");
    localStorage.removeItem("UserId");
    navigate("/");
  };

  const token = localStorage.getItem("token"); // Retrieve token from local storage
  const UserId = localStorage.getItem("UserId");

  return (
    <div className="Headermodel">
      <img
        id="Headerlogo"
        onClick={handleRandomPick}
        src={Logo}
        alt="Logo"
      />
      <button id="Headerbuttonone" onClick={handleMain}>
        칵테일 메인
      </button>
      <button id="Headerbuttontwo" onClick={handleRefrigerator}>
        냉장고
      </button>
      <button id="Headerbuttontwo" onClick={handleRecommendStart}>
        칵테일 추천
      </button>
      <button id="Headerbuttontwo" onClick={handleBoard}>
        게시판
      </button>
      {token ? ( 
        <div>
          <span id="welcomeMessage">{`${UserId}님 환영합니다.`}</span>
          <button id="Headerbuttonthree" onClick={handleLogout}>
            로그아웃
          </button>
        </div>
      ) : (
        <button id="Headerbuttonthree" onClick={handleLogin}>
          로그인
        </button>
      )}
    </div>
  );
}

export default Header;
