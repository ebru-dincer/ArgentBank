import logo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../features/authSlice.js";
import { logout } from "../features/authSlice.js";
import { selectUser } from "../features/userSlice.js";

/**
 * This component renders the Navigation header.
 * @returns {jsx} <NavBar />
 */
function NavBar() {
  const userInfo = useSelector(selectUser);
  const { isAuthenticated } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    console.log("logout");
    dispatch(logout());
    localStorage.clear();
  };

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {isAuthenticated ? <p>{userInfo.userName}</p> : null}
        <FontAwesomeIcon icon={faCircleUser} />
        {isAuthenticated ? (
          <NavLink
            className="main-nav-item"
            to="/"
            onClick={() => handleLogOut()}
          >
            Sign Out
          </NavLink>
        ) : (
          <NavLink className="main-nav-item" to="/signin">
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
