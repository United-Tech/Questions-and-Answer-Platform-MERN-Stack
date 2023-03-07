import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../../images/evangadi-logo-home.png'
import './Header.css'
const Header = () => {

  return (
    <div>
      <nav className="d-none d-md-block">
        <div className='nabaritems'>

          <div className="logo">
            <img src={logo} alt={logo} />
          </div>
          <ul className="menu">
            <li>Home</li>
            <li>How it Works</li>
            <div class="logout">
              <a href="#">LogOut</a>
            </div>
          </ul>
          {/* <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <li> Home</li>
              <li >How it Works</li>
              <div class="logout">
                <a href="#">LogOut</a>
              </div>
            </Dropdown.Menu>
          </Dropdown> */}
        </div>
      </nav>

      <nav className="d-sm-block d-md-none">
        <div className='nabaritems'>
          <div className="logo">
            <img src={logo} alt={logo} />
          </div>
<Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <li> Home</li>
              <li >How it Works</li>
              <div class="logout">
                <a href="#">LogOut</a>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </div >
  )
};

export default Header;
