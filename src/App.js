import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Settings from './pages/settings/Settings'

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/setting'} element={<Settings />} />
    </Routes>
  );
}

export default App;
