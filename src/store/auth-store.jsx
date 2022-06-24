import { useState, useEffect } from "react";
import React from "react";
const AuthContex = React.createContext({
  isLogedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthContexProvider = (props) => {
  const [loged, setLoged] = useState(false);
  useEffect(() => {
    const isloged = localStorage.getItem("isloged");
    if (+isloged === 1) {
      setLoged(true);
    }
  }, []);

  const onLogin = () => {
    localStorage.setItem("isloged", 1);
    setLoged(true);
  };
  const onLogout = () => {
    localStorage.setItem("isloged", 0);
    setLoged(false);
  };
  return (
    <AuthContex.Provider
      value={{ isLogedIn: loged, onLogout: onLogout, onLogin: onLogin }}
    >
      {props.children}
    </AuthContex.Provider>
  );
};

export default AuthContex;
