import React, { useState } from "react";
import Axios from "axios";

const Excuses = () => {
  const [genExcues, setGenExcues] = useState("");

  const fetchData = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then(
      (res) => {
        setGenExcues(res.data[0].excuse);
      }
    );
  };
  return (
    <div>
      Excuses
      <button onClick={() => fetchData("party")}>Party</button>
      <button onClick={() => fetchData("office")}>Office</button>
      <button onClick={() => fetchData("family")}>Family</button>
      <h1>{genExcues}</h1>
    </div>
  );
};

export default Excuses;
