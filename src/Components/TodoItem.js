import React from "react";
// props: { id: 10, content: "go to shop" }
const TodoItem = ({ content }) => (
  <div>
    <h4>{content}</h4>
  </div>
);
export default TodoItem;
