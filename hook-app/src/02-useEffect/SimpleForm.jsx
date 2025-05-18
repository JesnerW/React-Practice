import { useEffect, useState } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "jesner63@gmail.com",
  });

  const { username, email } = formState;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  useEffect(() => {
    console.log(username);
  }, [username]);

  return (
    <>
      <h1>Formulario Simple</h1>
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
     
      <button className="btn btn-primary mt-2">Guardar</button>

      {username === "strider" && <Message />}
    </>
  );
};
