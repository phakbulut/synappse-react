import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Main from "./components/Main"; // Ana sayfa bileşeni

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
