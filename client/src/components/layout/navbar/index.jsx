import React from "react";
import icon from "images/icons/logo.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar w-full flex shadow justify-between items-center px-10 py-4">
      <div className="flex gap-2 items-center">
        <Link to="/" className="w-10 h-10">
          <img src={icon} alt="logo" />
        </Link>
        <h3>DevConnect</h3>
      </div>
      <div className="flex justify-between gap-5">
        <div>
          <Link to="/profiles">Developers</Link>
        </div>
        <div>
          <Link to="/register">Register</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
