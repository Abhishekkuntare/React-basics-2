import React, { useState } from "react";
import Axios from "axios";

const Age = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);

  const agePredict = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setData(res.data);
    });
  };

  return (
    <div>
      Age
      <input
        type="text"
        placeholder="enter age"
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name}</h1>
      <button onClick={agePredict}>Age Predict</button>
      <div>
        <h1>Name: {data?.name}</h1>
        <h2>Age: {data?.age}</h2>
        <h2>Count: {data?.count}</h2>
      </div>
    </div>
  );
};

export default Age;
