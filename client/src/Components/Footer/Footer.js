import React from 'react'
import './Footer.css'
import img_footer from '../../images/evangadi_footer.png'

function Footer() {
  return (
    <div className="footer">
      <img className="img_footer" src={img_footer} alt="" />

      <div className='footer_links'>
        <ul>
          <h3>Useful Link</h3>
          <li> How it works </li>
          <li>Terms of Service</li>
          <li>Privacy policy</li>
        </ul>

        <ul>
          <h3>Contact Info</h3>
          <li> Evangadi Networks</li>
          <li>support@evangadi.com</li>
          <li>+1-202-386-2702</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer
