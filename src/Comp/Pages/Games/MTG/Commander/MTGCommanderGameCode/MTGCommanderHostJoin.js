import React from "react";
import { Link } from "react-router-dom";
import MTGCommanderGameCode from "./MTGCommanderGameCode";

export default function MTGCommanderHostJoin() {
  const [joinGame, setJoinGame] = React.useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>{joinGame ? <MTGCommanderGameCode /> : <button onClick={() => setJoinGame(true)}>Join Game</button>}</div>
      <div>or</div>
      <Link to="/mtgLifeCounterCommander">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Host Game</button>
      </Link>
    </div>
  );
}
