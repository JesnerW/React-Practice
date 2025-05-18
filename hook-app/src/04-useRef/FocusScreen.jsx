import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  }  

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <label htmlFor="name" className="form-label">Nombre</label>
      <input
        ref={inputRef}
        id="name"
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />
      <button htmlFor="name" className="btn btn-primary mt-2" onClick={onClick}>Focus</button>
    </>
  );
};
