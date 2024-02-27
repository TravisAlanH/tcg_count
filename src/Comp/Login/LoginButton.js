import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../Firebase";
import React from "react";
import "./Login.css";

export default function LoginButton() {
  const [openLogin, setOpenLogin] = React.useState(false);
  let loginMenuRef = React.useRef();

  React.useEffect(() => {
    let handler = (e) => {
      if (!loginMenuRef.current.contains(e.target)) {
        setOpenLogin(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleLoginClick = () => {
    signInWithPopup(auth, provider).then((results) => {
      // This logic is now handled by the onAuthStateChanged listener
    });
  };

  return (
    <div className="border-2 h-[3.5rem]">
      <div onClick={() => setOpenLogin(!openLogin)} className="h-[3.5rem] flex flex-row justify-end items-center">
        <p>S</p>
      </div>
      <div ref={loginMenuRef}>
        <div
          className={"login-container border-2 border-red-600 w-[14rem] " + (openLogin ? "openLogin" : "closedLogin")}>
          <div>
            <button onClick={handleLoginClick}>Login with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
}
