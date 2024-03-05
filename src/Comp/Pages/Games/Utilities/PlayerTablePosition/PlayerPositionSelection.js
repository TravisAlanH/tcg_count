import React from "react";
import { useSelector } from "react-redux";

export default function PlayerPositionSelection() {
  const playerCount = useSelector((state) => state.data.MTGCommander_Slices.playerCount);

  const threePlayers = [
    [1, 1, 0, 1],
    [1, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 1, 1],
  ];
  const fivePlayers = [
    [1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 0],
    [1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1],
    [0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1],
  ];

  console.log("Select");

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 items-center justify-center gap-4">
          {playerCount == 3
            ? threePlayers.map((player, index) => {
                return (
                  <div className="border-2 p-4 rounded-lg">
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
                  <div className="border-2 p-4 rounded-lg">
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
