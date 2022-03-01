import React from "react";
import { Link} from "react-router-dom";

import "../css/navbar.css";

function Navbar() {
  

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
          <button ><Link to={"/login"}>Login</Link></button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
