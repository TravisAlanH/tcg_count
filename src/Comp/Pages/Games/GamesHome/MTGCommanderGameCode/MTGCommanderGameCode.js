import React from "react";
import ShortUniqueId from "short-unique-id";
import Axios from "axios";

export default function MTGCommanderGameCode() {
  const [searchedCard, setSearchedCard] = React.useState("");
  const [cardList, setCardList] = React.useState([]);

  const uid = new ShortUniqueId();
  console.log(uid.randomUUID(6));

  const handleCardSearch = () => {
    let cardListData = {
      name: "",
      imageURL: "",
      manaCost: "",
    };
    let cardListHolder = [];
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
        <select className="border-2">
          {cardList.map((card, index) => {
            return (
              <option value={index} key={index}>
                {card.name + ", " + card.manaCost}
              </option>
            );
          })}
        </select>
        <img src={cardList[0]?.imageURL} alt="Card" />
      </div>
    </div>
  );
}
