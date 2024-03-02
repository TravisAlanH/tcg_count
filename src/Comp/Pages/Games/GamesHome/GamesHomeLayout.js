import React from "react";
import GameTable from "./GameTable";

export default function GamesHomeLayout() {
  return (
    <div>
      <div className="flex flex-row justify-center">
        <div className="grid grid-cols-2 gap-4">
          <GameTable title="MTG Commander" link="/mtgCommanderSetup" />
          <GameTable title="MTG Commander" />
          <GameTable title="MTG Commander" />
          <GameTable title="MTG Commander" />
        </div>
      </div>
    </div>
  );
}
