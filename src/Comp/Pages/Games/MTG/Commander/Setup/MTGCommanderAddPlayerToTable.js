import React from "react";
import { handleGetDBPlayerByCode } from "../../../../../../FireActions/GameCodeActions";

export default function MTGCommanderAddPlayerToTable() {
  const [player, setPlayer] = React.useState({});
  const [playerCode, setPlayerCode] = React.useState("");
  const [playerData, setPlayerData] = React.useState({});

  const handleGetPlayer = () => {
    handleGetDBPlayerByCode(playerCode).then((res) => {});
    console.log(res);
  };
  return (
    <div>
      <div className="flex flex-col">
        <input type="text" onChange={(e) => setPlayerCode(e.target.value)} className="border-2" />
        <button onClick={handleGetPlayer} className="border-2">
          Get Player
        </button>
      </div>
    </div>
  );
}
