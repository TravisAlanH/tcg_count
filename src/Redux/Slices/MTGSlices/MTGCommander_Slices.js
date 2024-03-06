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
        player_id: 0,
        player_name: "",
        player_life: 40,
        player_poison: 0,
        player_commander: "",
        player_commander_image: "",
        player_alive: true,
        player_commander_damage: commanderDamageBuilder(action.payload.playerCount),
      });
    },
    ResetPlayerData: (state) => {
      state.playerCount = 0;
      state.playerData = [];
    },
    PlayerJoinsGame: (state, action) => {
      console.log(action.payload);
      state.playerData[action.payload.position - 1] = {
        player_id: action.payload.player_id,
        player_name: action.payload.player_name,
        player_life: 40,
        player_poison: 0,
        player_commander: action.payload.player_commander,
        player_commander_image: action.payload.player_commander_image,
        player_alive: true,
        player_commander_damage: commanderDamageBuilder(state.playerCount),
      };
    },
  },
});

export const { BuildPlayerData, ResetPlayerData, PlayerJoinsGame } = Slice.actions;

export default Slice.reducer;
