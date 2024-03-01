import React from "react";
import { Link } from "react-router-dom";
import MTGCommanderGameCode from "./MTGCommanderGameCode/MTGCommanderGameCode";

export default function GamesHomeLayout() {
  const [joinGame, setJoinGame] = React.useState(false);
  return (
    <div>
      <div>{joinGame ? <MTGCommanderGameCode /> : <button onClick={() => setJoinGame(true)}>Join Game</button>}</div>
      <Link to="/mtgLifeCounter">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Host Game</button>
      </Link>
    </div>
  );
}
