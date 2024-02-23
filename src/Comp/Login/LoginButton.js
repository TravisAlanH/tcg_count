import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../Firebase";
import React from "react";

export default function LoginButton() {
  const handleLoginClick = () => {
    signInWithPopup(auth, provider).then((results) => {
      // This logic is now handled by the onAuthStateChanged listener
    });
  };

  return (
    <div>
      <button onClick={handleLoginClick}>Sign in with Google</button>
    </div>
  );
}
