import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";


const SideBar = () => {
  return (
    <section className="sidebar-topics">
    <NavLink exact to="/" className="item" activeClassName="active">
      <span>Home</span>
    </NavLink>

    <NavLink exact to="/discover" className="item" activeClassName="active">
      <span>Discover</span>
    </NavLink>

    <NavLink exact to="/radio" className="item" activeClassName="active">
      <span>Radio</span>
    </NavLink>

    <NavLink exact to="/foryou" className="item" activeClassName="active">
      <span>For you</span>
    </NavLink>
  </section>
   
    
  );
};

export default SideBar;