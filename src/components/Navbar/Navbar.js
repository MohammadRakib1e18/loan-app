import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        toast.success("You've been successfully logged out!");
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };
  const menu = (
    <>
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
      
    </>
  );
  return (
    <div className="navbar bg-slate-800 text-slate-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="rounded-none dropdown-content mt-3 p-2 shadow bg-slate-900  w-52"
          >
            {menu}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 p-0">{menu}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <>
            <button
              onClick={handleLogOut}
              className="btn text-slate-100  text-md rounded-none font-semibold"
            >
              Sign out
            </button>
            <div
              className="tooltip tooltip-left mx-2"
              data-tip={`${user?.displayName}`}
            >
              <FaUserAlt />
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary btn-outline rounded-full font-semibold">
              Sign in
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
