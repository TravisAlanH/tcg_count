import React from "react";
import { handleGetDBPlayerByCode } from "../../../../../../FireActions/GameCodeActions";
import MenuBar from "../../../Utilities/LifeMenuBar/MenuBar";
import { useSelector } from "react-redux";
import PlayerPositionSelection from "../../../Utilities/PlayerTablePosition/PlayerPositionSelection";

export default function MTGCommanderGameTable() {
  const playerCount = useSelector((state) => state.data.MTGCommander_Slices.playerCount);
  const tableLayout = useSelector((state) => state.data.MTGCommander_Slices.tableLayout);

  console.log(playerCount);

  return (
    <div>
      <div className="flex flex-col">
        <MenuBar />
        {playerCount == 5 || playerCount == 3 ? <PlayerPositionSelection /> : null}
      </div>
    </div>
  );
}
