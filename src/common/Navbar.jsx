import logo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { logout} from '../features/userSlice.js'


/**
 *
 * @returns {jsx} <NavBar />
 */
function NavBar() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    console.log("logout");
    dispatch(logout());
    localStorage.clear();
  }

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
        <p>{user}</p>
        <FontAwesomeIcon icon={faCircleUser} />
        {user ? (
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
