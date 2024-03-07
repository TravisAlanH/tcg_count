import React from "react";
import MTGCommanderHostJoinTable from "../../MTGCommanderGameCode/MTGCommanderHostJoinTable";
import "./Styles.css";

export default function MTCCommanderHostJoinButton(props) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <button onClick={() => alert("No Function")} className="border-2">
          GUEST
        </button>
        {/*  */}
        <button
          onClick={() => (document.getElementById("modal" + props.position).style.display = "block")}
          class="w3-button w3-black">
          Join Table
        </button>
        <div id={"modal" + props.position} class="w3-modal">
          <div class="w3-modal-content w3-card-4">
            <header class="w3-container w3-teal">
              <span
                onClick={() => (document.getElementById("modal" + props.position).style.display = "none")}
                class="w3-button w3-display-topright">
                &times;
              </span>
              <h2>Modal Header</h2>
            </header>
            {props.position}
            <MTGCommanderHostJoinTable position={props.position} />
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
