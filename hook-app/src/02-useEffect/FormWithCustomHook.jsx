import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { handleInputChange, onResetForm, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });

  // const { username, email, password } = formValues;

  return (
    <>
      <h1>Formulario con custom hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="jesner63@gmail.com"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
    </>
  );
};
