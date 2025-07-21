import React from "react";
import { Link } from "react-router-dom";
import mapogLogo from "../assets/mapog-logo.png";

function Header() {
  return (
    <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={mapogLogo} alt="Mapog Logo" className="h-10" />
        <h1 className="text-xl font-bold">Mapog MSMS</h1>
      </div>
      <nav className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/schools">Schools</Link>
      </nav>
    </header>
  );
}

export default Header;
