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
import { login } from "../features/authSlice.js";
import {
  setFirstName,
  setUserName,
  setLastName,
} from "../features/userSlice.js";
import { useState } from "react";

/**
 * This component renders the Sign in page.
 * @returns {jsx} <SignIn />
 */
function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setFormUsername] = useState("");
  const [password, setFormPassword] = useState("");
  const [error, setError] = useState("");

  async function submitLogIn(e) {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setError("Please complete all fields.");
      return false;
    } else {
      setError("");
    }

    const response = await logIn(username, password);

    if (response.status === 200) {
      localStorage.setItem("token", response.body.token);

      const userResp = await userProfile();
      dispatch(login());
      dispatch(setUserName(userResp.body.userName));
      dispatch(setFirstName(userResp.body.firstName));
      dispatch(setLastName(userResp.body.lastName));

      navigate("/user");
      return <User />;
    } else if (response.status !== 200) {
      setError("Incorrect username or password.");
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
                onChange={(e) => setFormUsername(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setFormPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {error && <p>{error}</p>}
            <button className="sign-in-button" onClick={(e) => submitLogIn(e)}>
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
