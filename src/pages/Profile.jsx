import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import ChangeProfile from "../components/ChangeProfile";

const Profile = () => {
  const { username } = useContext(AppContext);

  return (
    <div>
      <h1>
        <b>
          <i>{username}</i>
        </b>
      </h1>
      <ChangeProfile />
    </div>
  );
};

export default Profile;
