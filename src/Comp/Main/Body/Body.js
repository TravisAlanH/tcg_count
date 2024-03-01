import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/HomeLayout";
import AccountLayout from "../../Pages/Account/AccountLayout";
import SettingsLayout from "../../Pages/Settings/SettingsLayout";
import LifeLayout from "../../Pages/Games/MTG/Commander/LifeTotals/LifeLayout";
import GamesHomeLayout from "../../Pages/Games/GamesHome/GamesHomeLayout";

export default function Body() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/account" element={<AccountLayout />} />
      <Route path="/settings" element={<SettingsLayout />} />
      <Route path="/games" element={<GamesHomeLayout />} />
      <Route path="/mtgLifeCounter" element={<LifeLayout />} />
    </Routes>
  );
}
