import "./App.scss";
import React, { useContext } from "react";
import Login from "./Components/login/Login";
import Card from "./Components/ui/Card";
import Inside from "./Components/inside/Inside";
import Nav from "./Components/nav/Nav";
import AuthContex from "./store/auth-store";
function App() {
  const authCtx = useContext(AuthContex);
  return (
    <React.Fragment>
      <Nav />
      <main className="main">
        <Card>
          {!authCtx.isLogedIn && <Login />}
          {authCtx.isLogedIn && <Inside />}
        </Card>
      </main>
    </React.Fragment>
  );
}

export default App;
