import { createSlice } from "@reduxjs/toolkit";

function commanderDamageBuilder(playerCount) {
  let commanderDamage = [];
  for (let i = 0; i < playerCount; i++) {
    commanderDamage.push({
      player_id: i,
      damage: 0,
    });
  }
  return commanderDamage;
}

const initialState = {
  playerCount: 0,
  playerData: [],
};

const Slice = createSlice({
  name: "GameState",
  initialState,
  reducers: {
    BuildPlayerData: (state, action) => {
      state.playerCount = action.payload.playerCount;
      state.playerData.push({
        player_id: action.payload.id,
        player_name: action.payload.name,
        player_life: 40,
        player_poison: 0,
        player_commander: action.payload.commander,
        player_alive: true,
        player_commander_damage: commanderDamageBuilder(action.payload.playerCount),
      });
    },
    ResetPlayerData: (state) => {
      state.playerCount = 0;
      state.playerData = [];
    },
  },
});

export const { BuildPlayerData, ResetPlayerData } = Slice.actions;

export default Slice.reducer;
