export const keepTodos = () => ({
  type: "KEEP_TODOS"
});
export const addText = value => ({
  type: "ADD_TEXT",
  payload: value
});
export const addTodo = todo => ({
  type: "ADD_TODO",
  payload: todo
});

export const deleteTodo = key => ({
  type: "DELETE_TODO",
  payload: key
});

// export const completeTodo = key => ({
//   // type: "COMPLETE_TODO",
//   // payload: key
// });

export const editTodo = key => ({
  type: "EDIT_TODO",
  payload: key
});

export const editAddTodo = obj => ({
  type: "EDIT_ADD_TODO",
  payload: obj
});