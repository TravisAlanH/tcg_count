import React from "react";
import MTGCommanderHostJoinTable from "../../MTGCommanderGameCode/MTGCommanderHostJoinTable";
import ButtonModal from "../../../../Utilities/Modal/ButtonModal";

export default function MTCCommanderHostJoinButton(props) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <button onClick={() => alert("No Function")} className="border-2">
          GUEST
        </button>
        {/*  */}
        <ButtonModal
          Component={<MTGCommanderHostJoinTable position={props.position} />}
          index={props.position}
          Title="Host Position"
        />
      </div>
    </div>
  );
}
