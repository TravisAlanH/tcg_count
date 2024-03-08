import React from "react";

export default function LifeCount(props) {
  console.log(props);
  const buttonStyle = {
    width: "2rem",
    height: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
  };

  return (
    <div className="background-blur-sm bg-white/50">
      <div className="flex flex-row justify-center items-center">
        <div style={buttonStyle}>-</div>
        <div style={buttonStyle}>--</div>
        <div style={buttonStyle}>{props.player.currentPlayer.player_life}</div>
        <div style={buttonStyle}>++</div>
        <div style={buttonStyle}>+</div>
      </div>
    </div>
  );
}
