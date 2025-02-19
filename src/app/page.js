"use client"

import "./style/home-styles.css"
import GroceriesContainer from "./components/GroceriesContainer";
import { GetStores } from "./api/locate-stores/find-stores"
import React from "react";

export default function Home() {
  const [coords, setCoords] = React.useState(null);

  return (
    <div className="centered-container">
      <h1 className="page-title">CheapCart</h1>
      <p className="app-text centered-text">Every dollar counts. Let's find the cheapest version of YOUR shopping cart near you...</p>
      <br/>
      <p className="app-text centered-text">I want: </p>
      <GroceriesContainer/>
      <br/>
      <p className="app-text centered-text">My zip code is:</p>
      <input placeholder="Enter ZIP code"></input>
      <button onClick={async () => setCoords(await GetStores())} >Search</button>
      {(coords != null) && <p>test</p>}
    </div>
    );
}