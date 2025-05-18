import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHoook = () => {
  const [count, setCount] = useState(10);

  const increment = useCallback((value = 1) => {
    setCount((c) => c + value)
  }, [])

  return (
    <>
      <h1>useCallbackHoook Hook: {count}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>

  );
};
