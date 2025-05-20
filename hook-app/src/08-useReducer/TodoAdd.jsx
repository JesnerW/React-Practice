import { useForm } from "../hooks";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, handleInputChange, onResetForm } = useForm({
    description: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Que hay que hacer?"
          className="form-control"
          name="description"
          value={description}
          onChange={handleInputChange}
        />
        <button
          disabled={description.length === 0}
          onClick={onSubmit}
          type="submit"
          className="btn btn-outline-primary mt-1"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
