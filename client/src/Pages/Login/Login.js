import React, { useState } from "react";
import "./Login.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import About from "../../Components/About/About";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  let passwordInputType;
  let passwordToggleIconClass;

  if (showPassword) {
    passwordInputType = "text";
    passwordToggleIconClass = "bi bi-eye password-toggle-icon";
  } else {
    passwordInputType = "password";
    passwordToggleIconClass = "bi bi-eye-slash password-toggle-icon";
  }

  return (
    <div className="login_page">
      <div className="main">
        <h3>Login to your account</h3>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="create-account-link">
            Create new account
          </Link>
        </p>
        <form>
          <div className="password-input-container">
            <input type="text" placeholder="Your Email" />
            <div className="password-input-wrapper">
              <input type={passwordInputType} placeholder="Your Password" />
              <span
                className={passwordToggleIconClass}
                onClick={togglePasswordVisibility}
              ></span>
            </div>
          </div>
          <button className="submit mt-4">Submit</button>
          <Link to="/signup" className="create-account-link mt-2">
            Create new account
          </Link>
        </form>
      </div>

      <div className="login_pageAbout">
        <About />
      </div>
    </div>
  );
};

export default Login;
