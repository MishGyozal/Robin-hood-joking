import React from "react";
import "./App.css";
import ChuckNorris from "./components/chuckNorris/chuckNorris";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import JokeList from "./components/chuckNorris/JokeList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<ChuckNorris />} />
          <Route path={"jokes"} element={<JokeList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
