import React from "react";
import { auth } from "../../Firebase";

export default function LogoutButton() {
  const handleLogoutClick = () => {
    auth.signOut().then(() => {
      // This logic is now handled by the onAuthStateChanged listener
    });
  };

  return (
    <div>
      <button onClick={handleLogoutClick}>Sign Out</button>
    </div>
  );
}
