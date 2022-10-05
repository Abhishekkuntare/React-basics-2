import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const ChangeProfile = () => {
  const { setUsername } = useContext(AppContext);
  const [newUserName, setNewUserName] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="enter new name"
        onChange={(e) => setNewUserName(e.target.value)}
      />
      <button onClick={() => setUsername(newUserName)}>Update</button>
    </div>
  );
};

export default ChangeProfile;
