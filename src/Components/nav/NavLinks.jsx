import "./NavLinks.scss";
import { useContext } from "react";
import AuthContex from "../../store/auth-store";
const NavLinks = () => {
  const ctx = useContext(AuthContex);
  return (
    // <AuthContex.Consumer>
    //   {(ctx) => {
    //     return (
    <ul className="nav-links">
      <li className="nav-link">
        <a href=".">user</a>
      </li>
      <li className="nav-link">
        <a href=".">admin</a>
      </li>
      {ctx.isLogedIn && (
        <li className="nav-link">
          <a href="." onClick={ctx.onLogout}>
            Logout
          </a>
        </li>
      )}
    </ul>
    //     );
    //   }}
    // </AuthContex.Consumer>
  );
};
export default NavLinks;
