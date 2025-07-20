import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import TimetablePage from "./pages/TimetablePage";
import "./styles.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/timetable" element={<TimetablePage />} />
    </Routes>
  </Router>
);

export default App;
