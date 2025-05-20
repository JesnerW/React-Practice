import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (newTodo) => {
    const action = {
      type: "addTodo",
      payload: newTodo,
    };
    dispatch(action);
  };

  const onRemoveTodo = (id) => {
    const action = {
      type: "removeTodo",
      payload: id,
    };
    dispatch(action);
  };

  const onToggleTodo = (id) => {
    const action = {
      type: "toggleTodo",
      payload: id,
    };
    dispatch(action);
  };
  
  return {
    todos,
    onNewTodo,
    onRemoveTodo,
    onToggleTodo,
    pendingTodos: todos.filter(todo => !todo.done).length,
    totalTodos: todos.length,
  }
 }
 