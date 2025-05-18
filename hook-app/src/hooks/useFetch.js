import { useEffect, useState } from "react";

const initialState = {
  data: null,
  isLoading: true,
  hasError: false,
  error: null,
}

const localCache = {};

export const useFetch = (url) => {

  const [state, setState] = useState(initialState);

  useEffect(() => {
    getFetch();
  }, [url]);
  

  const getFetch = async () => {
    
    if (localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }

    setState(initialState);

    const resp = await fetch(url);
    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: 'No se pudo obtener la informacion',
      });
      return;
    }
    
    const data = await resp.json();
    
    console.log(data);
    
    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    localCache[url] = data;
  };

  return {
    ...state,
  };
};
