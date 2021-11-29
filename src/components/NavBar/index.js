import React, { useState } from "react";
import "./styles.less";
import logo from "./logo.png";
import { Link, useLocation } from "react-router-dom";
import { Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function NavBar() {
  const [showNavBarMenu, setShowNavBarMenu] = useState(false);
  const location = useLocation();

  const pages = [
    {
      name: "Posts",
      url: "/posts",
    },
    {
      name: "Testimonials",
      url: "/testimonials",
    },
    {
      name: "Login",
      url: "/login",
    },
  ];
  return (
    <div
      className={`container ${
        location.pathname !== "/" ? "nav-bar-white nav-bar" : "nav-bar"
      }`}
    >
      <Link to="/">
        <img className="nav-bar__logo" src={logo} alt="Syndo" />
      </Link>

      {location.pathname !== "/" ? (
        <div className="navbar-login">
          <div>
            <b>Jane Doe</b>
            <small>Logout</small>
          </div>
          <Avatar  style={{marginLeft: "8px"}} size="large" icon={<UserOutlined />} />
        </div>
      ) : (
        <div>
          <ul className="nav-bar__items">
            {pages.map((page, index) => {
              return (
                <li key={index}>
                  <Link to={page.url}>{page.name}</Link>
                </li>
              );
            })}
            <li>
              <Button>Get Started</Button>
            </li>
          </ul>
          <div className="burger-menu">
            <MenuOutlined
              style={{ fontSize: "20px" }}
              onClick={() => setShowNavBarMenu(!showNavBarMenu)}
            />
          </div>
        </div>
      )}

      {showNavBarMenu ? (
        <ul className="mobileMenu">
          <CloseOutlined
            onClick={() => setShowNavBarMenu(!showNavBarMenu)}
            style={{ color: "black", fontSize: "20px", marginBottom: "14px" }}
          />
          {pages.map((page, index) => {
            return (
              <li key={index}>
                <Link to={page.url}>{page.name}</Link>
              </li>
            );
          })}
          <li>
            <Button>Get Started</Button>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavBar;
