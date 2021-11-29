import React from "react";
import "./styles.less";
import Hero from "../../components/Hero";
import AllPosts from "../../components/AllPosts";
import Testimonial from "../../components/Testimonial";
import Featured from "../../components/Featured";
import { RightOutlined } from "@ant-design/icons";


function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="posts__title container">
        <h2>Explore Posts</h2>
        <span className="posts__title-icon">
          <RightOutlined style={{ fontSize: "12px" }} />
        </span>
      </div>
      <AllPosts />
      <Testimonial />
      <Featured />
    </div>
  );
}

export default Home;
