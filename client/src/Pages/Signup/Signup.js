import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
// import { BiEyeSlash,BiEye } from "bootstrap-icons";





const Signup = () => {

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange = (evnt) => {
      setPasswordInput(evnt.target.value);
    };
    const togglePassword = () => {
      if (passwordType === "password") {
        setPasswordType("text");
        return;
      }
      setPasswordType("password");
    };
  


  return (
    <div className="signup_page">
      <div className="signup">
        <h5>join the network</h5>
        <p>
          Already have an account?
          <Link className="link" to="/login">
            sign in
          </Link>
          <form className="sign">
            <input type="text" className="email" placeholder="Email"></input>
            <br></br>
            <div className="flex">
              <input className="firstName" placeholder="First Name"></input>
              <input className="lastName" placeholder="Last Name"></input>
            </div>
            <input className="userName" placeholder="User Name"></input>
            <br></br>
            <div className="password">
              <input
                type={passwordType}
                onChange={handlePasswordChange}
                value={passwordInput}
                name="password"
                class="form-control"
                placeholder="Password"
              />
            </div>

            <span className="eye" onClick={togglePassword}>
              {passwordType === "password" ? (
                <i className="bi bi-eye-slash"></i>
              ) : (
                <i className="bi bi-eye"></i>
              )}
            </span>

            <Link to="/">
              <button className="button" type="submit">
                Agree and Join
              </button>
            </Link>
          </form>
          <br></br>
          <div className="agree">
            <span>
              I agree to the
              <Link className="link" to="#">
                privacy policy.
              </Link>{" "}
              and{" "}
              <Link className="link" to="#">
                retms of service
              </Link>
            </span>
          </div>
          <br></br>
          <Link className="link" to="/login">
            Already have an account?
          </Link>
        </p>
      </div>

      <div className="about"></div>
    </div>
  );
};

export default Signup;
