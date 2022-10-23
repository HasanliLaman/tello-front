import React, { useEffect, useState } from "react";
import CommentForm from "../CommentForm";
import CommentType from "../CommentType";
import StyleCommentsContainer from "./style";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";

const CommentsContainer = () => {
  const data = useSelector((state: RootState) => state.product);
  const [comments, setComments] = useState(data.product.data.product.reviews);

  return (
    <StyleCommentsContainer>
      {!comments[0] && <p>İlk rəy yazan siz olun.</p>}
      {comments[0] &&
        comments.map((el) => (
          <CommentType
            key={el._id}
            content={el.content}
            user={el.creator.name}
            rating={el.rating}
          />
        ))}
      <CommentForm comments={comments} setComments={setComments} />
    </StyleCommentsContainer>
  );
};

export default CommentsContainer;
