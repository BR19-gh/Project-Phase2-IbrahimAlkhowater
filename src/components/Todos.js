import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo/*, completeTodo*/ } from "../redux/action/action";
import './style.css'




let i=0;
if(window.localStorage.getItem('todosDoneCounter')==null){window.localStorage.setItem('todosDoneCounter',0)}
const Todos = ({ todo, idx, deleteTodo, editTodo, selected, text }) => {
  return (
    
    <ul
    style={{cursor:'ponter',marginBottom:'20px', fontSiz:'50px'}}
    className="form-control"
    >
      <div onClick={() => editTodo(idx)}>{selected === idx ? text : todo}</div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <hr></hr>
   <button onClick={()=>{
     if(window.localStorage.getItem('todosDoneCounter')==null){window.localStorage.setItem('todosDoneCounter',0)}
     else{i=window.localStorage.getItem('todosDoneCounter');i++;window.localStorage.setItem('todosDoneCounter',i)}
     var listItems = document.getElementsByTagName("ul")[idx];
          if(listItems.classList.contains('active')){
          } else {
            listItems.classList.add("active");
            setTimeout(() => {
              listItems.classList.remove("active");
              deleteTodo(idx); 
              window.location.reload();
            }, 400);
          }
      
      }}
  className="btn btn-outline-secondary" type="button">Completed
  </button>
  <button onClick={()=>{
     var listItems = document.getElementsByTagName("ul")[idx];
          if(listItems.classList.contains('active')){
          } else {
            listItems.classList.add("active2");
            setTimeout(() => {
              listItems.classList.remove("active2");
              deleteTodo(idx); 
              window.location.reload();
            }, 400);
          }
      
      }}  className="btn btn-secondary" type="button">Delete</button>
      </div>
      </ul>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteTodo: key => dispatch(deleteTodo(key)),
  editTodo: key => dispatch(editTodo(key))
});



const mapStateToProps = ({ text, selected }) => ({
  text,
  selected
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
