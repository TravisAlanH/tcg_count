import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as gameActions from "../../../../../Redux/Slices/GameState_Slices";

export default function PlayerPositionSelection() {
  const playerCount = useSelector((state) => state.data.MTGCommander_Slices.playerCount);
  const dispatch = useDispatch();

  const threePlayers = [
    [1, 2, 0, 3],
    [1, 2, 3, 0],
    [0, 1, 2, 3],
    [1, 0, 2, 3],
  ];
  const fivePlayers = [
    [1, 2, 3, 4, 0, 5],
    [1, 2, 3, 4, 5, 0],
    [1, 2, 0, 3, 4, 5],
    [1, 2, 3, 0, 4, 5],
    [0, 1, 2, 3, 4, 5],
    [1, 0, 2, 3, 4, 5],
  ];

  useEffect(() => {
    if (playerCount !== "3" && playerCount !== "5") {
      console.log(playerCount);
      let newPlayerArray = [];
      for (let i = 0; i < playerCount; i++) {
        newPlayerArray.push(i + 1);
      }

      // const playerArray = new Array(parseInt(playerCount)).fill(1);
      dispatch(gameActions.BuildTableLayout(newPlayerArray));
    }
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 items-center justify-center gap-4">
          {playerCount === "3"
            ? threePlayers.map((player, index) => {
                return (
                  <div
                    className="border-2 p-4 rounded-lg"
                    onClick={() => dispatch(gameActions.BuildTableLayout(player))}>
                    <div className="w-[5rem] grid grid-cols-2 h-[12rem] justify-center items-center gap-2" key={index}>
                      {player.map((seat, index) => {
                        return (
                          <div key={index} className={"w-full h-full border-2 " + (seat === 0 ? "bg-black" : "")}></div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            : fivePlayers.map((player, index) => {
                return (
                  <div
                    className="border-2 p-4 rounded-lg"
                    onClick={() => dispatch(gameActions.BuildTableLayout(player))}>
                    <div className="w-[5rem] grid grid-cols-2 h-[12rem] justify-center items-center gap-2" key={index}>
                      {player.map((seat, index) => {
                        return (
                          <div key={index} className={"w-full h-full border-2 " + (seat === 0 ? "bg-black" : "")}></div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
