import React from "react";
import { Link } from "react-router-dom";

export default function GameTable(props) {
  return (
    <Link to={props.link}>
      <div className="w-[10rem] border-2 h-[6rem] rounded-lg">
        <img src={props.image} alt="IC" />
        <h2>{props.title}</h2>
      </div>
    </Link>
  );
}
