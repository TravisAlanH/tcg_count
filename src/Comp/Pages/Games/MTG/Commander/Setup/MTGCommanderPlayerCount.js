import React from "react";
import MenuBar from "../../../Utilities/LifeMenuBar/MenuBar";
import { useDispatch } from "react-redux";
import * as GameStateActions from "../../../../../../Redux/Slices/GameState_Slices";
import * as MTGCommanderActions from "../../../../../../Redux/Slices/MTGSlices/MTGCommander_Slices";

export default function LifeLayout() {
  const [playerCount, setPlayerCount] = React.useState(0);
  const dispatch = useDispatch();

  let payload = {
    playerCount: playerCount,
    id: 0,
    name: "test",
    commander: "test",
  };

  function handlePlayerBuild() {
    for (let i = 0; i < playerCount; i++) {
      payload.id = i;
      dispatch(MTGCommanderActions.BuildPlayerData(payload));
    }
  }

  return (
    <div className="flex flex-col justify-start">
      <div>
        <MenuBar />
      </div>
      <div className="flex flex-col items-start">
        <input type="number" className="border-2" onChange={(e) => setPlayerCount(e.target.value)} />
        <button
          onClick={() => {
            dispatch(GameStateActions.turnMatchScreenOn());
            handlePlayerBuild();
          }}
          className="border-2">
          set players
        </button>
      </div>
    </div>
  );
}
