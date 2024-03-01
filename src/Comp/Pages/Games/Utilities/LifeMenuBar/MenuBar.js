import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as GameStateActions from "../../../../../Redux/Slices/GameState_Slices";

export default function MenuBar() {
  const matchScreen = useSelector((state) => state.data.GameState_Slices.matchScreen);
  const dispatch = useDispatch();

  return (
    <div>
      {matchScreen ? (
        <div className="border-2 w-screen " onClick={() => dispatch(GameStateActions.turnMatchScreenOff())}>
          <p>X</p>
        </div>
      ) : null}
    </div>
  );
}
