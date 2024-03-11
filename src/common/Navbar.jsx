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
    <nav class="main-nav">
        <NavLink class="main-nav-logo" to="./index.html">
          <img
            class="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />         
          <h1 class="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink class="main-nav-item" href="./sign-in.html">
            <i class="fa fa-user-circle"></i>
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </NavLink>
        </div>
    </nav>
    )
}

export default NavBar