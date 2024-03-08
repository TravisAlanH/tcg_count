import React from "react";
import { useSelector } from "react-redux";
import MTGCommanderHostJoinButton from "./MTCCommanderHostJoinButton";
import MTGCommanderPlayerJoinButton from "./MTGCommanderPlayerJoinButton";
import "./PlayerBoxStyles.css";
import MTGCommanderPlayerGameStats from "./MTGCommanderPlayerGameStats";

export default function MTGCommanderPlayerBox(props) {
  const players = useSelector((state) => state.data.MTGCommander_Slices.playerData);

  if (players[props.position - 1].player_id !== 0) {
    const currentPlayer = players[props.position - 1];

    return <MTGCommanderPlayerGameStats currentPlayer={currentPlayer} position={props.positionIndex} />;
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
