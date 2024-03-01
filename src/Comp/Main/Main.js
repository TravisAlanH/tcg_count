import React from "react";
import NavBar from "./Nav/NavBar";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import { useSelector } from "react-redux";

export default function Main() {
  const matchScreen = useSelector((state) => state.data.GameState_Slices.matchScreen);

  return (
    <div className="w-screen">
      {matchScreen ? null : <NavBar />}
      <Body />
      {matchScreen ? null : <Footer />}
    </div>
  );
}
