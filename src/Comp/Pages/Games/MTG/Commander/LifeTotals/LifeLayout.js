import React from "react";
import MenuBar from "../../../Utilities/LifeMenuBar/MenuBar";
import { useDispatch } from "react-redux";
import * as GameStateActions from "../../../../../../Redux/Slices/GameState_Slices";

export default function LifeLayout() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-start">
      <div>
        <MenuBar />
      </div>
      <div className="flex flex-col items-start">
        <input type="number" className="border-2" />
        <button onClick={() => dispatch(GameStateActions.turnMatchScreenOn())} className="border-2">
          set players
        </button>
      </div>
    </div>
  );
}
