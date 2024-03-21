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
import { login } from '../features/userSlice.js'
import { useState } from "react";


/**
 *
 * @returns {jsx} <SignIn />
 */
function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submitLogIn(e) {
    e.preventDefault();
    const response = await logIn(username, password);


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
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faCircleUser} />
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button
              className="sign-in-button"
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
