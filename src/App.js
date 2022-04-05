import "./App.scss";
import { Routes, Route, Router } from "react-router-dom";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import Listings from "./pages/listings/Listings";
import Reservations from "./pages/reservations/Reservations";
import Discord from "./pages/discord/Discord";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <div className="appContent">
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/listing"} element={<Listings />} />
          <Route path={"/reservations"} element={<Reservations />} />
          <Route path={"/discord"} element={<Discord />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
