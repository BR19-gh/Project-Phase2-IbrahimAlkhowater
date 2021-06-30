import React from "react";
import { connect } from "react-redux";
import Todos from "./Todos";

const TodosList = ({ todos }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "200px",
        flexDirection: "column",
        margin: "0 auto"
      }}
    >
      {todos.map((todo, i) => (
        <Todos key={i} todo={todo} idx={i} />
      ))}
    </div>
  );
};
const mapStateToProps = ({ todos }) => ({
  todos
});
export default connect(mapStateToProps)(TodosList);
