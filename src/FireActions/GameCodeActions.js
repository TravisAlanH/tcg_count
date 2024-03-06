import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../Firebase";

export const handleCreateDBGameCode = async (payload) => {
  console.log(payload);
  await setDoc(doc(db, "GameCodes", payload.playerUid), {
    gameCode: payload.joinCode,
    gameType: payload.gameType,
    gameData: payload.commanderData,
    playerName: payload.playerName,
    playerUid: payload.playerUid,
  });
};

// function isNotEmptyObject(obj) {
//   return Object.keys(obj).length > 0;
// }

export const handleGetDBPlayerByCode = async (code) => {
  const collectionRef = collection(db, "GameCodes");
  const querySnapshot = await getDocs(collectionRef);

  let player = {};
  querySnapshot.forEach((doc) => {
    if (doc.data().gameCode === code) {
      console.log(doc.id, "=>", doc.data());
      player = doc.data();
    }
  });
  return player;
};
