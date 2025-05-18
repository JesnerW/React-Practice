import { useFetch } from "../hooks";
import { LoadingMessage, Quote } from "../03-examples";
import { useState } from "react";

export const Layout = () => {
  const [counter, setCounter] = useState(1);
  const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;
  const { data, isLoading } = useFetch(url);

  return (
    <>
      <h1>Informacion del pokemon</h1>
      <hr />
      {
        isLoading ? (
          <LoadingMessage />
        ) : (
          <Quote {...data[0]} />
        )
      }
      <button className="btn btn-primary mt-2" onClick={() => setCounter(counter + 1)}>Siguiente</button>
    </>
  )
}
