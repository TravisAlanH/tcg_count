import React from "react";
import "./Styles1.css";
import ShortUniqueId from "short-unique-id";

export default function ButtonModal({ Component, index, Title }) {
  const [code, setCode] = React.useState("");
  React.useEffect(() => {
    const uid = new ShortUniqueId();
    setCode(uid.randomUUID(9).toLocaleUpperCase());
  }, []);
  // const code = uid.randomUUID(9).toLocaleUpperCase();

  return (
    <div>
      <button
        onClick={() => (document.getElementById("modal" + code).style.display = "block")}
        className="border-2 border-red-900">
        {Title}
      </button>
      <div id={"modal" + code} className="modal">
        <div className="modal-content w-[18rem] p-3 rounded-lg">
          <header className="w-full flex flex-row justify-end">
            <span
              onClick={() => (document.getElementById("modal" + code).style.display = "none")}
              className="p-3 border-2 w-[1.5rem] h-[1.5rem] flex flex-row justify-center items-center">
              &times;
            </span>
          </header>
          {Component}
        </div>
        {index}
      </div>
    </div>
  );
}
