import React from "react";
import LoginMain from "../../Login/LoginMain";

export default function NavBar() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center px-3 border-2 h-[3.5rem] w-screen">
        <p className="text-2xl font-bold">LOGO</p>
        <LoginMain /> {/* User Image / Login Button */}
      </div>
    </div>
  );
}
