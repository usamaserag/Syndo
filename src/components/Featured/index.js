import React from "react";
import "./styles.less";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";


function Featured() {
  const features = ["image1", "image2", "image3", "image4", "image5"];

  return (
    <div className="features container">
      <h2 className="features__title">Featured by Industry Leaders</h2>
      <div className="features__images">
        {features.map((item, index) => {
          return <img key={index} src={require(`./images/${item}.jpg`).default} alt="" />;
        })}
      </div>
      <div className="features__icons">
        <span>
          <LeftOutlined />
        </span>
        <span>
          <RightOutlined />
        </span>
      </div>
    </div>
  );
}

export default Featured;
