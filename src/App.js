import "./App.scss";
import { Routes, Route, Router } from "react-router-dom";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path={"/"} element={<Header />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/setting"} element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
