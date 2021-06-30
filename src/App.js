import React, { useEffect } from "react";
import InputForm from "./components/InputForm";
import TodosList from "./components/TodosList";
import TodosDoneCounter from "./components/TodosDoneCounter";
import { keepTodos } from "./redux/action/action";
import { connect } from "react-redux";
const App = ({ deleteAll, keepTodos }) => {
  useEffect(() => {
    keepTodos();
  }, [keepTodos]);
  return (
    <div style={{textAlign: 'center'}} className="App">
      <h1 style={{fontSize:'50px'}}>To-dos</h1>
      <InputForm />
      <TodosDoneCounter />
      <TodosList />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  keepTodos: () => dispatch(keepTodos())
});
export default connect(
  null,
  mapDispatchToProps
)(App);
