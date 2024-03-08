import React from "react";
import LifeCount from "../../MTGCommanderUtilites/LifeCount";

export default function MTGCommanderPlayerGameStats(props) {
  let player = props;
  console.log(player);
  const parentWidth = document.getElementById("TablePosition0").getBoundingClientRect().width;
  const parentHeight = document.getElementById("TablePosition0").getBoundingClientRect().height;
  console.log((player + 1) % 2);
  let style = {};
  if ((player.position + 1) % 2 === 0) {
    style = {
      transformOrigin: "top left",
      width: parentHeight,
      height: parentWidth,
      bottom: -parentWidth,
      transform: "rotate(-90deg)",
    };
  } else {
    style = {
      transformOrigin: "bottom left",
      width: parentHeight,
      height: parentWidth,
      top: -parentWidth,
      transform: "rotate(90deg)",
    };
  }

  return (
    <div className="border-2 absolute" style={style}>
      <div className="relative overflow-hidden inline-block w-full h-full">
        <img
          src={player.currentPlayer.player_commander_image}
          alt=""
          className="pointer-events-none absolute w-full h-full -z-10"
        />
        <div className="flex flex-row justify-center items-center w-full h-full">
          <div className="flex flex-col justify-center items-center">
            <div></div>
            <div>
              <LifeCount player={props} />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
