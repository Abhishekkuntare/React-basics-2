import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/cat"}>Cat</Link>
      <Link to={"/excuses"}>Excuses</Link>
      <Link to={"/reactquerycom"}>ReactQueryCom</Link>
      <Link to={"/form"}>Form</Link>
      <Link to={"/age"}>Age</Link>
      <Link to={"/profile"}>Profile</Link>
      <Link to={"/contact"}>Contact</Link>
    </div>
  );
};

export default Header;
