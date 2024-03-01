import React from "react";
import ShortUniqueId from "short-unique-id";
import Axios from "axios";

/**
 * MTGCommanderGameCode Component for searching Magic: The Gathering Commander cards.
 * Allows users to input a card name, searches for it using the Scryfall API,
 * and displays a list of matching cards with their names, mana costs, and images.
 */
export default function MTGCommanderGameCode() {
  // State variables
  const [searchedCard, setSearchedCard] = React.useState("");
  const [cardList, setCardList] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null); // New state for selected card

  // Unique ID generator instance
  const uid = new ShortUniqueId();
  console.log(uid.randomUUID(6));

  /**
   * Handles the card search functionality.
   * Utilizes the Scryfall API to search for Commander legal creature cards.
   * Updates the state with the resulting card list.
   */
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

  /**
   * Handles the selection of a card and updates the state.
   * This function is called when an option is selected from the dropdown.
   */
  const handleCardSelection = (index) => {
    setSelectedCard(cardList[index]);
  };

  // JSX rendering
  return (
    <div>
      <div className="flex flex-col border-2">
        {/* Input for card search */}
        <input
          type="text"
          value={searchedCard}
          onChange={(e) => setSearchedCard(e.target.value)}
          className="border-2"
        />
        {/* Button for initiating card search */}
        <button onClick={handleCardSearch}>Search</button>
        {/* Dropdown for selecting a commander */}
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
        {/* Image of the selected commander */}
        {selectedCard && <img src={selectedCard.imageURL} alt={selectedCard.name} style={{ maxWidth: "100%" }} />}
      </div>
    </div>
  );
}
