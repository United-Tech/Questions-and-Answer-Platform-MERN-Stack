import React from 'react'
import "./Login.css"
// import "bootstrap-icons/font/bootstrap-icons.css";

const Login = () => {
  return (
    <div className="main">
      <h3>Login to your account</h3>
      <p>
        Don't have an account?{" "}
        <a href="#" className="create-account-link">
          Create new account
        </a>
      </p>
      <form>
        <div>
          <input type="text" placeholder="Your Email" />

          <input type="password" placeholder="Your Password" />
          <span className="bi-eye"></span>
        </div>

        <button className="submit">submit</button>
        <a href="#" className="create-account-link">
          Create new account
        </a>
      </form>
    </div>
  );
}

export default Login