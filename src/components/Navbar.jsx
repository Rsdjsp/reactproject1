import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/UserContext";

import "../css/navbar.css";

function Navbar() {
  const { logOut, logged } = useContext(userContext);

  return (
    <>
      <div className="navbar-container">
        <img className="principal-logo" src="#" alt="Movies Logo" />
        <div className="category-container">
          <ul>
            <Link to={"/"}>
              <p>home</p>
            </Link>
            <Link to={"/"}>
              <p>recent</p>
            </Link>
            <Link to={"/"}>
              <p>popular</p>
            </Link>
            <Link to={"/"}>
              <p>unpopular</p>
            </Link>
          </ul>
        </div>
        <div className="session-container">
          <img src="#" alt="session logo" />
          {!logged && (
            <button>
              <Link to={"/login"}>Login</Link>
            </button>
          )}
          {logged && <button onClick={() => logOut()}>LogOut</button>}
        </div>
      </div>
    </>
  );
}

export default Navbar;
