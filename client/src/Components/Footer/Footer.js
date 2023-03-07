import React from "react";
import images from "../../images/images";
import "./footer.css";

function Footer() {
  return (
    <div className="footerDiv">
      <div className="footer">
        <div className="footerLogo">
          <img className="img_footer" src={images.FooterLogo} alt="" />
          <div className="footerLogoIcon">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-youtube"></i>
          </div>
        </div>

        <div className="footer_links">
          <ul>
            <h3>Useful Link</h3>
            <li> How it works </li>
            <li>Terms of Service</li>
            <li>Privacy policy</li>
          </ul>

          <ul>
            <h3>Contact Info</h3>
            <li>Evangadi Networks</li>
            <li>support@evangadi.com</li>
            <li>+1-202-386-2702</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
