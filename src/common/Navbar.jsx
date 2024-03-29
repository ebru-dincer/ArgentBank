import logo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../features/authSlice.js";
import { logout} from '../features/authSlice.js'
import { selectUser } from "../features/userSlice.js"


/**
 *
 * @returns {jsx} <NavBar />
 */
function NavBar() {
  const userInfo = useSelector(selectUser);
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector(selectAuth)


  const handleLogOut = () => {
    console.log("logout");
    dispatch(logout());
    localStorage.clear();
  }

  // const userName = userInfo.user.userName

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
        {/* <p>{userName}</p> */}
        <FontAwesomeIcon icon={faCircleUser} />
        {isAuthenticated ? (
          <NavLink className="main-nav-item" to="/" onClick={() => handleLogOut()}>
            Sign Out
          </NavLink>
        ) : (
          <NavLink className="main-nav-item" to="/signin">
            Sign In
          </NavLink>
        )}
        {/* <NavLink className="main-nav-item" to="/signin">
            Sign In
          </NavLink> */}
      </div>
    </nav>
  );
}

export default NavBar;
