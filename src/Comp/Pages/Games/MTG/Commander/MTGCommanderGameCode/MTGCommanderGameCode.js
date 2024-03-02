import React from "react";
import ShortUniqueId from "short-unique-id";
import Axios from "axios";

export default function MTGCommanderGameCode() {
  const [searchedCard, setSearchedCard] = React.useState("");
  const [cardList, setCardList] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const code = () => {
    const uid = new ShortUniqueId();
    return uid.randomUUID(6);
  };

  const handleCardSearch = () => {
    let searchItem = searchedCard.split(" ").join("+");
    Axios.get(
      "https://api.scryfall.com/cards/search?q=" +
        searchItem +
        "+%28game%3Apaper%29+legal%3Acommander+t%3Alegend+t%3Acreature&unique=cards&as=grid&order=name"
    ).then((res) => {
      console.log(res.data.data);
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
      console.log(cardListHolder);
    });
  };

  const handleCardSelection = (index) => {
    setSelectedCard(cardList[index]);
  };
  console.log(selectedCard);

  return (
    <div>
      <div className="flex flex-col border-2">
        <input
          type="text"
          value={searchedCard}
          onChange={(e) => setSearchedCard(e.target.value)}
          className="border-2"
        />
        <button onClick={handleCardSearch}>Search</button>
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
        {selectedCard && <img src={selectedCard.imageURL} alt={selectedCard.name} style={{ maxWidth: "100%" }} />}
        {selectedCard !== null ? (
          <div>
            <h3>Game Code:</h3>
            <p>{code()}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
