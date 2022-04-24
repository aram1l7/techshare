import React from "react";
import icon from "assets/images/icons/logo2.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar w-full flex shadow justify-between items-center px-10 lg:px-24 py-4">
      <div className="flex gap-2 items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={icon} alt="logo" />
          <h3 className="font-bold text-2xl">TS</h3>
        </Link>
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
