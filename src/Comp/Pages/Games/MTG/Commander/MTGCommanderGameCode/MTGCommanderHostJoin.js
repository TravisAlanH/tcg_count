import React from "react";
import { Link } from "react-router-dom";
import MTGCommanderGameCode from "./MTGCommanderGameCode";
import ButtonModal from "../../../Utilities/Modal/ButtonModal";

export default function MTGCommanderHostJoin() {
  return (
    <div className="flex flex-col justify-center items-center">
      <ButtonModal Title="Join Game" Component={<MTGCommanderGameCode />} index={0} />
      <div>or</div>
      <Link to="/mtgLifeCounterCommander">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Host Game</button>
      </Link>
    </div>
  );
}
