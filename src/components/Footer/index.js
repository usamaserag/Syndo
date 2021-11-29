import React from "react";
import "./styles.less";
import logo from "../NavBar/logo.png";
import { DownOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <footer className={`container ${location.pathname !== '/' ? "footer-white footer" : "footer"}`}>
      <div className="footer__top">
        <div className="footer__logo">
          <img className="logo" src={logo} alt="Syndo" />
          <p className="footer__bold">BUILT BY THE CROWD FOR THE CROWD</p>
        </div>
        <div>
          <p className="footer__bold">Products</p>
        </div>
        <div>
          <p className="footer__bold">Company</p>
          <small className="t-p">About us</small>
          <small>Risk</small>
        </div>
        <div>
          <p className="footer__bold">Resources</p>
          <small className="t-p">How it works</small>
          <small>FAQ</small>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-left">
          <small>
            <span>&#169;</span> syndo 2021.All Rights Reversed
          </small>
          <small>Privacy Policy</small>
          <small>Legal Terms</small>
        </div>
        <small>
          EN <DownOutlined />
        </small>
      </div>
    </footer>
  );
}

export default Footer;
