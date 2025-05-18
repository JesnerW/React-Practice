import { useCounter } from "../hooks";
import { useMemo, useState } from "react";

const heavyStuff = (iteration = 20) => {
  for (let i = 0; i < iteration; i++) {
    console.log("heavyStuff");
  }
  return `${iteration} iterations done`;
};

export const MemoHook = () => {
  const { counter, increment, decrement } = useCounter(1000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
  
  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>Resultado Memorizado: {memorizedValue}</h4>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button className="btn btn-primary" onClick={decrement}>
        -1
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
