import React from "react";
import { useSelector } from "react-redux";
import MTGCommanderHostJoinButton from "./MTCCommanderHostJoinButton";
import MTGCommanderPlayerJoinButton from "./MTGCommanderPlayerJoinButton";
import "./PlayerBoxStyles.css";

export default function MTGCommanderPlayerBox(props) {
  const players = useSelector((state) => state.data.MTGCommander_Slices.playerData);

  if (players[props.position - 1].player_id !== 0) {
    const currentPlayer = players[props.position - 1];
    // const divStyle = {
    //   background: `url(${currentPlayer.player_commander_image}) center center / cover `,
    //   backgroundSize: "cover",
    //   transform: "rotate(270deg)",
    //   // Updated background shorthand
    //   // Rotate the background image by 90 degrees
    // };
    // const divStyleRotate = {
    //   transform: "rotate(90deg)",
    // };

    // return (
    //   <div className="parent flex flex-row w-full h-full items-center justify-center">
    //     <div className="child1 flex-grow">
    //       <div className="w-full h-full" style={divStyle}>
    //         <div>{currentPlayer.player_name}</div>
    //         <div>{currentPlayer.player_life}</div>
    //         <div>{currentPlayer.player_poison}</div>
    //         <div>{currentPlayer.player_commander}</div>
    //       </div>
    //       <div className="w-full h-full" style={divStyle}>
    //         <div>{currentPlayer.player_name}</div>
    //         <div>{currentPlayer.player_life}</div>
    //         <div>{currentPlayer.player_poison}</div>
    //         <div>{currentPlayer.player_commander}</div>
    //       </div>
    //     </div>
    //   </div>
    // );
    return (
      <div className="w-full h-full">
        <div className="tableContent">
          <img src={currentPlayer.player_commander_image} alt="" className="backgroundImg" />
          <div>{currentPlayer.player_name}</div>
          <div>{currentPlayer.player_life}</div>
          <div>{currentPlayer.player_poison}</div>
          <div>{currentPlayer.player_commander}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {players.every((player) => player.player_id === 0) ? (
        <div>
          <MTGCommanderHostJoinButton position={props.position} />
        </div>
      ) : (
        <div>
          <MTGCommanderPlayerJoinButton position={props.position} />
        </div>
      )}
    </div>
  );
}
