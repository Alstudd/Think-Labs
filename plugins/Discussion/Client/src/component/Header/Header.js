import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import "./css/Header.css";
function Header() {
  return (
    <header>
      <div className="Header-container">
        <div className="header-left h-14 ">
          <img
            src="https://i.imgur.com/tyYNqjs.png"
            alt="logo"
            className="h-12 bg-blend-multiply"
          />
        </div>
        <div className="header-middle">
          {/* <div className="header-search"> */}
          {/* <SearchIcon /> */}
          {/* <input type="text" placeholder="search" /> */}
          {/* </div> */}
        </div>
        <div className="header-right">
          <Avatar className="m-4" />
          <InboxIcon className="m-4" />
        </div>
      </div>
    </header>
  );
}

export default Header;
