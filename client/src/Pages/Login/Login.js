import React, { useState } from "react";
import "./Login.css";
import "bootstrap-icons/font/bootstrap-icons.css";

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
    <div className="main">
      <h3>Login to your account</h3>
      <p>
        Don't have an account?
        <a href="#" className="create-account-link">
          Create new account
        </a>
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

        <button className="submit">submit</button>

        <a href="#" className="create-account-link">
          Create new account
        </a>
      </form>
    </div>
  );
};

export default Login;
