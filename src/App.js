import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddMovie from "./features/addMovie";
import WatchedMovies from "./features/watchedMovies";
import WatchListMovies from "./features/watchListMovies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WatchListMovies />}></Route>
        <Route path="/add" element={<AddMovie />}></Route>
        <Route path="/watched" element={<WatchedMovies />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
