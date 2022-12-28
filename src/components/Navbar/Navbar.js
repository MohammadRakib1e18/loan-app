import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar z-10  sticky top-0 p-0 bg-slate-800 ">
      <ul className="flex gap-5 text-lg w-5/6 mx-auto justify-center text-slate-200   p-0 ">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/personal">Personal</NavLink>
        </li>
        <li>
          <NavLink to="/business">Business</NavLink>
        </li>
        <li>
          <NavLink to="/loan">Loan</NavLink>
        </li>


      </ul>
    </div>
  );
};

export default Navbar;
