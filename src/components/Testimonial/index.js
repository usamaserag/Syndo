import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./styles.less";

function Testimonial() {
  const doers = [
    {
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      avatar: "UserOutlined",
      name: "Jane Doe",
      company: "Company XYZ-CEO",
    },
    {
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      avatar: "UserOutlined",
      name: "Jane Doe",
      company: "Company XYZ-CEO",
    },
    {
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      avatar: "UserOutlined",
      name: "Jane Doe",
      company: "Company XYZ-CEO",
    },
    {
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      avatar: "UserOutlined",
      name: "Jane Doe",
      company: "Company XYZ-CEO",
    },
  ];
  return (
    <div className="doers container">
      <h2 className="doers__title">Hear it from our doers</h2>
      <div className="doers__container">
        {doers.map((doer, index) => {
          return (
            <div className="doers__item" key={index}>
              <p>"{doer.comment}"</p>
              <div className="doers__avatar">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="doers__doer-info">
                  <p className="doers__name">{doer.name}</p>
                  <p className="doers__company">{doer.company}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonial;
