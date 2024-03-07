import React from "react";
import { handleGetDBPlayerByCode } from "../../../../../../FireActions/GameCodeActions";
import { useDispatch } from "react-redux";
import * as MTGCommanderActions from "../../../../../../Redux/Slices/MTGSlices/MTGCommander_Slices";
import CodeInput from "../../../Utilities/Input/CodeInput";

export default function MTGCommanderAddPlayerToTable(props) {
  const [codeInputs, setCodeInputs] = React.useState(["", "", "", "", "", ""]);
  const dispatch = useDispatch();
  const [player, setPlayer] = React.useState({});
  // const [playerCode, setPlayerCode] = React.useState("");

  const handleGetPlayer = async () => {
    const code = () => {
      let code = "";
      codeInputs.forEach((input) => {
        code += input;
      });
      return code;
    };
    console.log(code());
    await handleGetDBPlayerByCode(code()).then((data) => {
      setPlayer(data);
    });
    console.log(player);
  };

  return (
    <div>
      <div className="flex flex-col">
        {/* <input type="text" onChange={(e) => setPlayerCode(e.target.value)} className="border-2" /> */}
        <CodeInput codeInputs={codeInputs} setCodeInputs={setCodeInputs} position={props.position} />
        <button onClick={handleGetPlayer} className="border-2">
          Get Player
        </button>
        {Object.keys(player).length !== 0 ? (
          <div>
            <div>
              <div>{player.playerName}</div>
              <div>{player.gameCode}</div>
              <div>{player.gameType}</div>
            </div>
            <button
              onClick={() => {
                let joinPayload = {
                  position: props.position,
                  player_id: player.playerUid,
                  player_name: player.playerName,
                  player_commander: player.gameData.name,
                  player_commander_image: player.gameData.imageURL,
                };
                dispatch(MTGCommanderActions.PlayerJoinsGame(joinPayload));
              }}>
              Confirm
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
