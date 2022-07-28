import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "12px",
    background: "grey",
    textDecoration: "none",
    color: "white",
  };
  
  function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkgrey",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/backlog"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkgrey",
          }}
        >
          Backlog
        </NavLink>
        <NavLink
          to="/completed"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkgrey",
          }}
        >
          Completed
        </NavLink>
      </div>
    )
}

export default NavBar;