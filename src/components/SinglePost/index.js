import React from "react";
import "./styles.less";
import { Progress } from 'antd';
import { Button } from 'antd';
import { Card } from 'antd';

const SinglePost = ({postNumber, img, postTitle, postDate, postText, progressPercentage, FundingGoal, InterestRate, Tenor, TotalInvested, Investors, SkinInTheGame}) => {
  return (

      <div className="post">
        <Card>
        <div className="post__img">
          <img src={require(`../AllPosts/images/${img}.jpg`).default} alt="" />
          <span>{postNumber}</span>
        </div>
        <div className="post__body">
          <div className="post__title">
            <h4>{postTitle}</h4>
            <p>{postDate}</p>
          </div>
          <p className="post__content">{postText}</p>
          <div className="post-progress">
          <Progress percent={progressPercentage} status="active" />
          </div>
          <div className="post__info">
            <div>
              <p>Funding Goal</p>
              <b>{FundingGoal}</b>
            </div>
            <div>
              <p>Interest rate</p>
              <b>{InterestRate}</b>
            </div>
            <div>
              <p>Tenor</p>
              <b>{Tenor}</b>
            </div>
            <div>
              <p>Total Invested</p>
              <b>{TotalInvested}</b>
            </div>
            <div>
              <p>Investors</p>
              <b>{Investors}</b>
            </div>
            <div>
              <p>Skin in the game</p>
              <b>{SkinInTheGame}</b>
            </div>
          </div>
          <div className="post__btns">
          <Button size="small">Loan</Button>
          <Button size="small">Industry</Button>
          </div>
        </div>
        </Card>
      </div>

  );
};

export default SinglePost;
