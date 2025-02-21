"use client"

import "./style/home-styles.css"
import GroceriesContainer from "./components/GroceriesContainer";
import { GetStores } from "./api/locate-stores/find-stores"
import React from "react";
import StoreCard from "./components/StoreCard";

export default function Home() {
  const [stores, setStores] = React.useState(null);

  return (
    <div className="centered-container">
      <h1 className="page-title">CheapCart</h1>
      <p className="app-text centered-text">Every dollar counts. Let's find the cheapest version of YOUR shopping cart near you...</p>
      <br/>
      <p className="app-text centered-text">I want: </p>
      <GroceriesContainer/>
      <br/>
      <button className="location-button" onClick={async () => setStores(await GetStores())} >Search</button>
      <br/>
      <div className="stores-container">
      {(stores != null) && stores.map((location) => 
        (<StoreCard 
          storeName={location.name} 
          storeAddress={location.display_name} 
          distanceMeters={location.distance}
          key={location.display_name} />))}
        </div>
      
    </div>
    );
}
//<StoreCard storeName="Wollastons" storeAddress="369 Huntington Ave, Boston, MA 02115" distanceMeters="50"/>