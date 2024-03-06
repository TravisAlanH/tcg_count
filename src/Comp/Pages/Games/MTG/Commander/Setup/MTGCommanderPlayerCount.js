import React, { useEffect } from "react";
import MenuBar from "../../../Utilities/LifeMenuBar/MenuBar";
import { useDispatch } from "react-redux";
import * as GameStateActions from "../../../../../../Redux/Slices/GameState_Slices";
import * as MTGCommanderActions from "../../../../../../Redux/Slices/MTGSlices/MTGCommander_Slices";
import { Link } from "react-router-dom";

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
    // if (playerCount !== "3" || playerCount !== "5") {
    //   const playerArray = new Array(parseInt(playerCount)).fill(1);
    //   dispatch(GameStateActions.BuildTableLayout(playerArray));
    // }
  }

  useEffect(() => {
    dispatch(GameStateActions.BuildTableLayout([]));
  });

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
        <Link to="/mtgCommanderGameTable">Continue</Link>
      </div>
    </div>
  );
}
