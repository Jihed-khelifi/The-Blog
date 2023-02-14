import { Link } from "react-router-dom";

import cn from "classnames";
import styles from "./styles.css";

const Header = ({ isHomePage, isCreateBlogPage }) => {
  return (
    <header id="header" className="header-wrapper">
      <div className="header-container">
        <h1 className="header-title">
          <Link to="/">The Blog</Link>
        </h1>
        <nav id="navbar" className="header-navbar">
          <ul>
            {!isHomePage ? (
              <li>
                <Link className="nav-link scrollto active" to="/">
                  Home
                </Link>
              </li>
            ) : (
              ""
            )}
            {!isCreateBlogPage ? (
              <li>
                <Link className="nav-link scrollto" to="/create-blog">
                  Create Blog
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
