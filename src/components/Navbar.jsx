import React from "react";
import { Link } from "react-router";
import logoImg from "../assets/logo.png"

const Navbar = () => {

    const navLinks = (
        <>
            <li>
                <Link>Home</Link>
            </li>
            <li>
                <Link>Apps</Link>
            </li>
            <li>
                <Link>Installations</Link>
            </li>
        </>
    )

  return (
    <div className="navbar sticky top-0 z-50 border-b bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost text-2xl text-purple-700 font-semibold"><span><img src={logoImg} className="w-8 h-8" /></span>Hero IO</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-linear-to-t from-sky-500 to-indigo-500 text-white">Contribution</a>
      </div>
    </div>
  );
};

export default Navbar;
