import React from "react";
// import { handleGetDBPlayerByCode } from "../../../../../../FireActions/GameCodeActions";
import MenuBar from "../../../Utilities/LifeMenuBar/MenuBar";
import { useSelector } from "react-redux";
import PlayerPositionSelection from "../../../Utilities/PlayerTablePosition/PlayerPositionSelection";
import MTGCommanderPlayerBox from "./PlayerBox/MTGCommanderPlayerBox";
import "./TableStyles.css";
// import * as GameActions from "../../../../../../Redux/Slices/GameState_Slices";

export default function MTGCommanderGameTable() {
  const tableLayout = useSelector((state) => state.data.GameState_Slices.tableLayout);

  return (
    <div>
      <div className="flex flex-col">
        <MenuBar />
        {tableLayout.length === 0 ? (
          <PlayerPositionSelection />
        ) : (
          <div className="w-screen h-screen">
            {tableLayout.length === 2 ? (
              <div className={"grid grid-rows-2 w-full h-full"}>
                {tableLayout.map((position, index) => {
                  return (
                    <div key={index} className="border-2">
                      {position === 0 ? "" : <MTGCommanderPlayerBox position={position} positionIndex={index} />}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className={"tableLayout"}>
                {tableLayout.map((position, index) => {
                  return (
                    <div
                      key={index}
                      className="border-2 relative flex flex-row justify-start items-end"
                      id={"TablePosition" + String(index)}>
                      {position === 0 ? "" : <MTGCommanderPlayerBox position={position} positionIndex={index} />}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
