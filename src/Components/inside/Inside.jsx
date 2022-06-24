import Button from "../ui/Button";
import React from "react";
import { useContext } from "react";
import AuthContex from "../../store/auth-store";
const Inside = () => {
  const authCtx = useContext(AuthContex);
  return (
    <React.Fragment>
      <h1>Welcom back!</h1>
      <Button click={authCtx.onLogout}>Logout</Button>
    </React.Fragment>
  );
};
export default Inside;
