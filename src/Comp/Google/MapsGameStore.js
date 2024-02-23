import React, { useState, useEffect } from "react";

const MapsGameStore = () => {
  const [gameStores, setGameStores] = useState([]);

  useEffect(() => {
    // Function to fetch game stores using Google Places API
    const fetchGameStores = async () => {
      try {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const apiKey = "AIzaSyB5aWVfJoBdFnt5WGP6n22KMBp9FnTwNgM";
        const location = "38.456591, -81.927883"; // Replace with your actual location coordinates
        const radius = 1 * 1609.34; // 50 miles to meters

        const response = await fetch(
          proxyurl +
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&keyword=trading%20card%20games&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Error fetching game stores");
        }

        const data = await response.json();
        setGameStores(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGameStores();
  }, []); // Run once when the component mounts

  return (
    <div>
      <h2>Game Stores in the Area</h2>
      <ul>
        {gameStores.map((store) => (
          <li key={store.place_id}>{store.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MapsGameStore;
