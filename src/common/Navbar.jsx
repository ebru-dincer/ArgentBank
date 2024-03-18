import logo from '../assets/argentBankLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
// import "../sass/main.css"
import { NavLink } from "react-router-dom";

/**
 * 
 * @returns {jsx} <NavBar />
 */
function NavBar() {
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
          <NavLink className="main-nav-item" to="/signin">
            <i className="fa fa-user-circle"></i>
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </NavLink>
        </div>
    </nav>
    )
}

export default NavBar