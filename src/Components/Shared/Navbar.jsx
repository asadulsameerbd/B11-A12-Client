import { useState } from "react";
import { Link, NavLink } from "react-router";
import Button from "../Common/button";
import "./navbar.css";
import logo from "../../assets/icon/logo.png";
import UseAuth from "../../Hook/UseAuth";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "All Scholarships", path: "/scholarships" },
  { name: "Universities", path: "/universities" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const { user } = UseAuth();

  // user info before/after info
  const userInfo = (
    <>
      {user ? (
        <div className="avatar w-10">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
      ) : (
        <span className="hidden md:flex gap-5">
          <button className="btn">sign in</button>
          <Button>Get Started</Button>
        </span>
      )}
    </>
  );

  return (
    <div className="navbar nav-sticky bg-[#D8DEE8b3] backdrop-blur-xl shadow-sm px-4 py-2 sticky top-0 z-50 ">
      {/* logo */}
      <Link
        to="/"
        className="navbar-start cursor-pointer flex gap-3  items-center"
      >
        <img className="w-10" src={logo} alt="" />
        <p className="text-xl mt-2 font-bold">Scholarhub</p>
      </Link>

      {/* Desktop Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded ${
                    isActive ? "bg-base-content text-white" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end flex items-center space-x-2">
        <div className="hidden md:flex">{userInfo}</div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setHamburger(!hamburger)}
            className="flex flex-col justify-between w-8 h-6 focus:outline-none"
          >
            <span
              className={`block h-1 w-full bg-base-content rounded transition-transform duration-300 ${
                hamburger ? "rotate-45 translate-y-3" : ""
              }`}
            />
            <span
              className={`block h-1 w-full bg-base-content rounded transition-opacity duration-300 ${
                hamburger ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-1 w-full bg-base-content rounded transition-transform duration-300 ${
                hamburger ? "-rotate-45 -translate-y-3" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {hamburger && (
        <div className="md:hidden absolute pb-10 top-full left-0 w-full bg-[#D8DEE8] backdrop-blur-xl shadow-md">
          <ul className="menu w-full flex flex-col p-4 space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded ${
                      isActive ? "bg-base-content text-white" : ""
                    }`
                  }
                  onClick={() => setHamburger(false)} // menu auto close
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="ml-8">{userInfo}</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
