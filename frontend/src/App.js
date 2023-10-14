import React from "react";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Home from "./components/Home/Home";
import Chat from "./components/Base"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/parentCommunity" element={<Chat  />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
