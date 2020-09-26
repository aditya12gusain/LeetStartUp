import React from "react";
import "./Navbar.css";
import SettingsIcon from "@material-ui/icons/Settings";
import MessageIcon from "@material-ui/icons/Message";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PersonIcon from "@material-ui/icons/Person";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h3 className="navbar__logo">LOGO ICO</h3>
      </div>
      <div className="navbar__searchBar">
        <input
          className="navbar__search"
          type="text"
          placeholder="Search for a profile..."
        ></input>
      </div>
      <div className="navbar__toogle">
        <div className="navbar__collapse">
          <div className="navbar__link navbar__message">
            <MessageIcon />
          </div>
          <div className="navbar__link">
            <PersonIcon />
          </div>
          <div className="navbar__link">
            <SettingsIcon />
          </div>
        </div>
        <div className="navbar__link">
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
