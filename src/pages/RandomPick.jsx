import Header from "./Header";

function RandomPick() {
    const cocktail = ["1번 칵테일", "2번 칵테일","3번 칵테일", "4번 칵테일", "5번 칵테일", "6번 칵테일"]
    const getRamdomIndex = (length) => {
        return parseInt(Math.random() * length);
    }
  return (
    <div>
      <Header/>
      <h1>칵테일 랜덤 추천</h1>
      {cocktail[getRamdomIndex(cocktail.length)]}
    </div>
  );
}

export default RandomPick;