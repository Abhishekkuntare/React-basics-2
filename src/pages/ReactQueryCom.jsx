import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const ReactQueryCom = () => {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (isError) {
    return <h1>sorry there is error</h1>;
  }

  return (
    <div>
      <h1>{catData?.fact}</h1>
      <button onClick={refetch}>update</button>
    </div>
  );
};

export default ReactQueryCom;
