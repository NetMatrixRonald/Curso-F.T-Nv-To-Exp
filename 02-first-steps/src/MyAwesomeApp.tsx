import type { CSSProperties } from "react";

const firstname = "Pochita";
const lastname = "Sierra";

const favoriteGames = ["Residen Evil Requiem", "Horizon Forbidden West", "God of War Ragnarok"];

const stateRadius = true;

const myStyle: React.CSSProperties = {
  backgroundColor: "red",
  borderRadius: stateRadius ? 40 : 60,
  padding: 10,
}


const gameState = () => {
  if (favoriteGames.includes("Residen Evil Requiem")) {
    return true;
  } else {
    return false;
  }
}

const address = {
  zipCode: "ABC-123",
  street: "Maple Street",
  city: "Los Angeles"
}

function MyAswesomeApp() {
  return (
    <div >
      <h1 data-testid="firstName">{firstname}</h1>
      <h3>{lastname}</h3>
      
      <p className="mi-clase-favorita">{favoriteGames.join(", ")} - {gameState() ? 'Game is RER' : 'Game is not RER'}</p>
      <p>{2 + 2}</p>
      <li style={myStyle}>
        {JSON.stringify(address)}    </li>
    </div>
  ) 
}

export default MyAswesomeApp;