export const TodoItem = ({ id, description, done, onRemoveTodo, onToggleTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span className={`align-self-center ${done ? "text-decoration-line-through" : ""}`} onClick={() => onToggleTodo(id)}>{description}</span>
        <button className="btn btn-danger" onClick={() => onRemoveTodo(id)}>
          Borrar
        </button>
      </li>
    </>
  );
};
