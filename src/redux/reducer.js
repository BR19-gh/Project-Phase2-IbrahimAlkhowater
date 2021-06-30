const initState = {
  todos: [],
  text: "",
  selected: undefined
};

const setkeep = todos =>
  window.localStorage.setItem("todos2", JSON.stringify(todos));

export const addTodo = (state = initState, action) => {
  switch (action.type) {
    case "KEEP_TODOS":
      const todos = JSON.parse(window.localStorage.getItem("todos2"));
      return { ...state, todos: todos ? todos : [] };
    case "ADD_TEXT":
      return { ...state, text: action.payload };
    case "ADD_TODO":
      const todos2 = state.todos.concat(action.payload);
      window.localStorage.setItem("todos2", JSON.stringify(todos2));
      return { ...state, todos: todos2, text: "" };
    
      case "DELETE_TODO":
      const todo3 = state.todos.filter((todo, i) => i !== action.payload);
      setkeep(todo3);
      return {
        ...state,
        todos: todo3
      };
      
      case "COMPLETE_TODO": return;
      //   const todo4 = state.todos.filter((todo, i) => i == action.payload);
      //   console.log("state.todos: ",todo4);
      //   console.log("payload: ",action.payload);
      // setkeep(todo4);
      // return {
      //   ...state,
      //   todos: todo4
      // };
    default:
      return state;

      case "EDIT_TODO":
      return {
        ...state,
        text: state.todos[action.payload],
        selected: action.payload
      };
    case "EDIT_ADD_TODO":
      const todo5 = state.todos.map((todo, i) =>
        i !== action.payload.selected ? todo : action.payload.value
      );
      setkeep(todo5);
      return {
        ...state,
        todos: todo5,
        selected: undefined,
        text: ""
      };

  }
};
