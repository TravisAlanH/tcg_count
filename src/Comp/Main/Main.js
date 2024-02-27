import React from "react";
import NavBar from "./Nav/NavBar";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";

export default function Main() {
  return (
    <div className="w-screen">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}
