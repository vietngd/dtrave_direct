import React from "react";
import Header from "./components/Header";
import "./App.css";
import Listings from "./listings/Listings";
function App() {
  return (
    <div className="paper">
      <Header />
      <Listings />
    </div>
  );
}

export default App;
