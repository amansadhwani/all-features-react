import { useState } from "react";

const commentData = {
  title: "Fake article title.",
  author: "grzm",
  comments: [
    {
      id: 1,
      text: "Example comment here 1.",
      author: "user2",
      children: [
        {
          id: 2,
          text: "Another example comment text 2.",
          author: "user3",
          children: [
            {
              id: 3,
              text: "Another example comment text 3.",
              author: "user4",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      text: "Example comment here 4.",
      author: "user5",
      children: [],
    },
  ],
};

function Comment({ comment, onClickUpdate }: any) {
  const [textComment, setTextComment] = useState("");
  const nestedComments = (comment.children || []).map(
    (comment: any, index: number) => {
      return (
        <Comment
          comment={comment}
          type="child"
          onClickUpdate={(id: number) => onClickUpdate(id, index)}
          key={comment.id}
        />
      );
    }
  );

  return (
    <div style={{ marginLeft: "25px", marginTop: "10px" }}>
      <div>
        {comment.text} {nestedComments.length > 0 ? "+" : null}
        <div onClick={() => onClickUpdate(comment.id, textComment)}>Reply </div>
        <input
          value={textComment}
          onChange={(e: any) => setTextComment(e.target.value)}
        />
      </div>
      {nestedComments}
    </div>
  );
}

function CommentBox() {
  const [updateComment, setUpdateComment] = useState(commentData);

  const onClickUpdate = (id: number, index: number) => {
    debugger;
    console.log(updateComment, id, index);
    let data = { ...updateComment };

    data.comments[1].children.push({
      id: 10,
      text: "Another example comment text 10.",
      author: "user10",
      children: [],
    });
    setUpdateComment(data);
  };
  return (
    <div>
      {commentData.comments.map((comment, index) => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            onClickUpdate={(id: number) => onClickUpdate(id, index)}
          />
        );
      })}
    </div>
  );
}

export default CommentBox;
