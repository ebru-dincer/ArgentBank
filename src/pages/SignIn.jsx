import "../app/App.css";
import NavBar from "../common/Navbar";
import Footer from "../common/Footer";
import User from "./User.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { logIn } from "../api/api.js";
import { userProfile } from "../api/api.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSlice } from '../features/userSlice.js';
import { login, logout} from '../features/userSlice.js'


/**
 *
 * @returns {jsx} <SignIn />
 */
function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function submitLogIn(e) {
    e.preventDefault();
    console.log("execution fontion submitLogin")

    const email = document.getElementById("username");
    const password = document.getElementById("password");

    const emailValue = email.value;
    const passwordValue = password.value;
    console.log(emailValue);
    console.log(passwordValue);

    const response = await logIn(emailValue, passwordValue);

    console.log("token is", response.body.token);
    if (response.body.token) {
      localStorage.setItem("token", response.body.token);

      const user = await userProfile();
      console.log(user.body.userName)
      dispatch(login(user.body.userName))

      navigate("/user");
      return <User />;
      
    } else {
      console.error("token non trouvé");
    }
  }


  return (
    <>
      <NavBar />
      <main className="main bg-dark">
        <section class="sign-in-content">
          <FontAwesomeIcon icon={faCircleUser} />
          <h1>Sign In</h1>
          <form>
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div class="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <button
              class="sign-in-button"
              onClick={(e) => submitLogIn(e)}
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
