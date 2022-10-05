import React, { useEffect, useState } from "react";
import Axios from "axios";

const Cat = () => {
  const [data, setData] = useState([]);
  const generateCat = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setData(res.data.fact);
    });
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <div>
      {data}
      <button onClick={generateCat}>generater the cat</button>
    </div>
  );
};

export default Cat;
