import { useFetch, useCounter } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";



export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  
  const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;

  const { data, isLoading } = useFetch(url);

  return (
    <>
      <h1>Informacion del pokemon</h1>
      <hr />
      {
        isLoading ? (
          <LoadingMessage />
        ) : (
          <PokemonCard {...data} />
        )
      }
      <button className="btn btn-primary mt-2" onClick={() => counter > 1 && decrement()}>Anterior</button>
      <button className="btn btn-primary mt-2" onClick={() => increment()}>Siguiente</button>
    </>
  )
}
