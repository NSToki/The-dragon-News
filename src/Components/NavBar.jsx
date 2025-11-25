import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/user.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex  gap-5 text-[#706F6F]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="career">Career</NavLink>
      </div>
      <div className="flex gap-5">
        <img src={logo} alt="" />
        <Link to="/login"><button className="btn btn-primary bg-black text-white">Login</button></Link>
      </div>
    </div>
  );
};

export default NavBar;
