import { TodoList, TodoAdd } from "./";
import { useTodos } from "../hooks";

export const TodoApp = () => {

  const { todos, onNewTodo, onRemoveTodo, onToggleTodo, pendingTodos, totalTodos } = useTodos();
  
  return (
    <>
      <div>
        TodoApp ({totalTodos}), <small>pendientes: {pendingTodos}</small>
      </div>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
