import "./App.scss";
import { Routes, Route, Router } from "react-router-dom";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Reservations from "./pages/reservations/Reservations"

function App() {
  return (
    <div className="appContainer">
      <Header />
      <div className="appContent">
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/settings"} element={<Settings />} />
          <Route path={"/reservations"} element={<Reservations />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
