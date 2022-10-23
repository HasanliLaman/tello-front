import React from "react";
import StyleCommentType from "./style";
import filled from "../../../assets/images/star-filled.svg";
import empty from "../../../assets/images/star-empty.svg";

const CommentType: React.FC<{
  content: string;
  user: string;
  rating: number;
}> = ({ content, user, rating }) => {
  return (
    <StyleCommentType>
      <div className="score">
        <p>{rating}</p>
        <div>
          {[0, 0, 0, 0, 0].map((el, i) => {
            if (i < rating) return <img key={i} alt="star" src={filled} />;
            else return <img alt="star" key={i} src={empty} />;
          })}
        </div>
      </div>
      <article>
        <h3>{user}</h3>
        <p>{content}</p>
      </article>
    </StyleCommentType>
  );
};

export default CommentType;
