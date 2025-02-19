import "./style/home-styles.css"
import GroceriesContainer from "./components/GroceriesContainer";

export default function Home() {
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
      <button>Search</button>
    </div>
    );
}
