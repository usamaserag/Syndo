import React from "react";
import "./styles.less";
import postsData from "./postsData.json";
import SinglePost from "../SinglePost";


const AllPosts = () => {
  return (
    <div className="posts container">
      <div className="posts__container">
        {postsData.map((post, index) => {
          return (
            <SinglePost
              key={index}
              postNumber={post.postNumber}
              img={post.img}
              postTitle={post.postTitle}
              postDate={post.postDate}
              postText={post.postText}
              progressPercentage={post.progressPercentage}
              FundingGoal={post.FundingGoal}
              InterestRate={post.InterestRate}
              Tenor={post.Tenor}
              TotalInvested={post.TotalInvested}
              Investors={post.Investors}
              SkinInTheGame={post.SkinInTheGame}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllPosts;
