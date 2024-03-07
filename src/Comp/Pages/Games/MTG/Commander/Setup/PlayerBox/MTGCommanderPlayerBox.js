import React from "react";
import { useSelector } from "react-redux";
import MTGCommanderHostJoinButton from "./MTCCommanderHostJoinButton";
import MTGCommanderPlayerJoinButton from "./MTGCommanderPlayerJoinButton";

export default function MTGCommanderPlayerBox(props) {
  const players = useSelector((state) => state.data.MTGCommander_Slices.playerData);

  if (players[props.position - 1].player_id !== 0) {
    const currentPlayer = players[props.position - 1];
    return (
      <div>
        <div>{currentPlayer.player_name}</div>
        <div>{currentPlayer.player_life}</div>
        <div>{currentPlayer.player_poison}</div>
        <div>{currentPlayer.player_commander}</div>
        <div>
          <img src={currentPlayer.player_commander_image} alt="Commander" />
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
