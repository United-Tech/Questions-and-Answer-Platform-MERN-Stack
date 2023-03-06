import React from 'react';
import {Link} from 'react-router-dom';
import logo from './evangadi-logo-home.png';
import './Header.css';

function Header() {
    <div>
<div className="container">
    <img src={logo}alt=''/>
    <Link to={"/"}>home</Link>
    <Link to={"/how-it-works"}>how it works</Link>
    <button className="btn btn-lg btn-primary my-3" type="submit">
          SIGN IN
        </button>
</div>
</div>
}
export default Header;

