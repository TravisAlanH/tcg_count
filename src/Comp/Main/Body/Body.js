import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/HomeLayout";
import AccountLayout from "../../Pages/Account/AccountLayout";
import SettingsLayout from "../../Pages/Settings/SettingsLayout";
import LifeLayout from "../../Pages/Games/MTG/Commander/Setup/MTGCommanderPlayerCount";
import GamesHomeLayout from "../../Pages/Games/GamesHome/GamesHomeLayout";
import MTGCommanderHostJoin from "../../Pages/Games/MTG/Commander/MTGCommanderGameCode/MTGCommanderHostJoin";

export default function Body() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/account" element={<AccountLayout />} />
      <Route path="/settings" element={<SettingsLayout />} />
      <Route path="/games" element={<GamesHomeLayout />} />

      <Route path="/mtgCommanderSetup" element={<MTGCommanderHostJoin />} />
      <Route path="/mtgLifeCounterCommander" element={<LifeLayout />} />
    </Routes>
  );
}
