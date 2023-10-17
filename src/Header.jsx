import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import FaHandsClapping from "react-icons/fa6";

const Header = ({ OpenSidebar }) => {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <h5 className="helo">
        <label for="">
          <span className="helo">Hello</span>{" "}
          <span className="mansoor">Mansoor</span>
        </label>
        <i
          class="fa-solid fa-hands-clapping"
          style={{ color: "#e2bf9b", marginLeft: "5px" }}
        ></i>
      </h5>
      <div className="header-left ">
        <div class="search-wrapper">
          <span>
            <BsSearch className="icon" />
          </span>
          <input type="search" placeholder="Search" />
        </div>
      </div>
    </header>
  );
};

export default Header;
