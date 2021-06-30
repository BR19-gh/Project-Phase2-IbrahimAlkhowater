import React from "react";
import { connect } from "react-redux";
import { addTodo, addText, editAddTodo } from "../redux/action/action";
const InputForm = ({ addText, text, selected, addTodo }) => {
  const handleChange = e => addText(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    if (selected || selected === 0)
      editAddTodo({
        value: text,
        selected: selected
      });
    else addTodo(text);
  };
  return (
    <div>
    <form className="input-group mb-3" onSubmit={handleSubmit}>
      <input
        style={{marginLeft:"25%"}}
        className="form-control"
        type="text"
        name="todo"
        value={text}
        placeholder="Enter To-do"
        onChange={handleChange}
      />
      <br></br>
      <button className="btn btn-outline-secondary" style={{marginRight:"25%"}}>Add</button>
    </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  addText: value => dispatch(addText(value)),
  editAddTodo: obj => dispatch(editAddTodo(obj))
});
const mapStateToProps = ({ text, selected }) => ({
  text,
  selected
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputForm);
