import Axios from "axios";
import React from "react";
import { auth } from "../../../../../../Firebase";
import * as MTGCommanderActions from "../../../../../../Redux/Slices/MTGSlices/MTGCommander_Slices";
import { useDispatch } from "react-redux";

export default function MTGCommanderHostJoinTable(props) {
  const dispatch = useDispatch();
  const [cardList, setCardList] = React.useState([]);
  const [searchedCard, setSearchedCard] = React.useState("");
  const [selectedCard, setSelectedCard] = React.useState(null);

  const user = auth.currentUser;

  const handleCardSearch = () => {
    let searchItem = searchedCard.split(" ").join("+");
    Axios.get(
      "https://api.scryfall.com/cards/search?q=" +
        searchItem +
        "+%28game%3Apaper%29+legal%3Acommander+t%3Alegend+t%3Acreature&unique=cards&as=grid&order=name"
    ).then((res) => {
      const cardListHolder = res.data.data.map((card) => {
        let id = card.id;
        let imgURL =
          "https://cards.scryfall.io/art_crop/front/" + id.split("")[0] + "/" + id.split("")[1] + "/" + id + ".jpg?";
        return {
          name: card.name,
          imageURL: imgURL,
          manaCost: card.mana_cost,
        };
      });
      setCardList(cardListHolder);
    });
  };

  const handleCardSelection = (index) => {
    setSelectedCard(cardList[index]);
  };

  return (
    <div>
      {" "}
      <div className="flex flex-col border-2">
        <input
          type="text"
          value={searchedCard}
          onChange={(e) => setSearchedCard(e.target.value)}
          className="border-2"
        />
        <button onClick={handleCardSearch}>Search</button>
      </div>
      <div className="flex flex-col">
        <select id="CommanderSelection" className="border-2" onChange={(e) => handleCardSelection(e.target.value)}>
          <option value={0}>Select a Commander</option>
          {cardList.map((card, index) => {
            return (
              <option value={index} key={index}>
                {card.name + ", " + card.manaCost}
              </option>
            );
          })}
        </select>
      </div>
      {selectedCard !== null ? (
        <div>
          <button
            onClick={() => {
              let joinPayload = {
                position: props.position,
                player_id: user.uid,
                player_name: user.displayName,
                player_commander: selectedCard.name,
                player_commander_image: selectedCard.imageURL,
              };
              dispatch(MTGCommanderActions.PlayerJoinsGame(joinPayload));
            }}>
            Confirm
          </button>
        </div>
      ) : null}
    </div>
  );
}
