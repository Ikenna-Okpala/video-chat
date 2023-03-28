import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./components/home/home.component"
import Room from './components/room/room.component';
import Profile from './components/Profile/profile.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/room" element={<Room />}></Route>

    </Routes>
  );
}

export default App;
