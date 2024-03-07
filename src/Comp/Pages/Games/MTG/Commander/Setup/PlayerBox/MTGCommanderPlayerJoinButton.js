import React from "react";
import MTGCommanderAddPlayerToTable from "../MTGCommanderAddPlayerToTable";
import ButtonModal from "../../../../Utilities/Modal/ButtonModal";

export default function MTCCommanderPlayerJoinButton(props) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <button onClick={() => alert("No Function")} className="border-2">
          GUEST
        </button>
        <ButtonModal
          Component={<MTGCommanderAddPlayerToTable position={props.position} />}
          index={props.position}
          Title="Player Position"
        />
      </div>
    </div>
  );
}
