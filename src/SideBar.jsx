import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
import Logo from "./assets/avatar_default.jpg";

const SideBar = ({ openSidebarToggle, OpenSidebar }) => {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsGrid1X2Fill className="icon" /> Dashboard{" "}
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <div>
          <li className="sidebar-list-item">
            <a href="">
              <div>
                <BsGrid1X2Fill className="icon content_icon" /> Dashboard
              </div>
              <FaGreaterThan className="arrow" />
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <div>
                {" "}
                <BsFillArchiveFill className="icon content_icon" /> Product
              </div>
              <FaGreaterThan className="arrow" />
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <div>
                <BsFillGrid3X3GapFill className="icon content_icon" /> Customers
              </div>
              <FaGreaterThan className="arrow" />
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <div>
                <BsPeopleFill className="icon content_icon" /> Income
              </div>
              <FaGreaterThan className="arrow" />
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <div>
                <BsListCheck className="icon content_icon" /> Promote
              </div>
              <FaGreaterThan className="arrow" />
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <div>
                <BsMenuButtonWideFill className="icon content_icon" /> Help
              </div>
              <FaGreaterThan className="arrow" />
            </a>
          </li>
        </div>
        <div style={{ marginTop: "60px" }}>
          <li className="sidebar-list-item sidebar_profile">
            <a href="">
              <div style={{ display: "flex" }}>
                <img
                  src={Logo}
                  style={{ width: "30px", borderRadius: "50%" }}
                />{" "}
                <div
                  style={{
                    margin: "0 0 0 10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{ margin: "0px", display: "block", color: "#fff" }}
                  >
                    Mansoor
                  </div>{" "}
                  <div style={{ margin: "0px", display: "block" }}>
                    Developer
                  </div>
                </div>
              </div>

              <FaGreaterThan className="arrow" />
            </a>
          </li>
        </div>
      </ul>
    </aside>
  );
};

export default SideBar;
