import React from "react";
import "./styles.less";
import AllPosts from "../../components/AllPosts";
import { Input } from "antd";
import { Select } from "antd";

function Posts() {
  return (
    <div className="posts">
      <div className="container posts__header">
        <h2 className="posts__title">Posts</h2>
        <p className="posts__text">Scout.Invest.Repeat.</p>
        <div className="posts__options">
          <Input style={{ width: "300px" }} placeholder="Type to search ..." />
          <Select style={{ width: "140px" }} value="Status"></Select>
          <Select style={{ width: "140px" }} value="Type"></Select>
          <Select style={{ width: "120px" }} value="Most Funded"></Select>
        </div>
      </div>
      <AllPosts />
    </div>
  );
}

export default Posts;
