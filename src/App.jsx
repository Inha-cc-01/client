import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MakeQuiz from "./pages/MakeQuiz";
import SolveQuiz from "./pages/SolveQuiz";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakeQuiz />} />
        <Route path="/quiz" element={<SolveQuiz />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
