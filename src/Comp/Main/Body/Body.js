import React from "react";

export default function Body() {
  return (
    <div className="h-screen">
      <button
        className="border-2 w-[20rem] h-[5rem]"
        onClick={() => {
          console.log("test");
        }}>
        test
      </button>
    </div>
  );
}
