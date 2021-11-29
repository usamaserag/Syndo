import React from "react";
import "./styles.less"
import tab from "./tab.png"
import { Button, Typography } from "antd";

const { Title } = Typography;

function Hero() {
  return (
    <div className="hero container">
      <div>
        <p className="hero__sup-title">Built by the crowd for the crowd</p>
        <Title className="hero__title">The Leading Digital Donations Platform in Egypt</Title>
        <p className="hero__desc">The Leading Digital Donation Platform In Egypt</p>
        <Button type="primary" size="large">
          Get Started
        </Button>
      </div>
      <img className="hero__image" src={tab} alt="tab"/>
    </div>
  );
}

export default Hero;
