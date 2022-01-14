import React from "react";
import logo from "../assets/images/lugar-white-logo.svg";

function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={logo} alt="Lugar" aria-label="Lugar" />
            <p className="footer-address" aria-label="Address">
              2118 Thornridge Cir.
              <br />
              Dubai, UAE 35624
            </p>
            <p className="footer-phone" aria-label="Phone">
              +33 415 65356 - 9
            </p>
            <p className="footer-email-link" aria-label="Email">
              contact@lugar.com
            </p>
          </div>
          <div className="col-md-2">
            <h5 aria-label="Quick Links">Quick links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Project</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 aria-label="Quick Links">Legal links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Terms</a>
              </li>
              <li>
                <a href="/">Conditions</a>
              </li>
              <li>
                <a href="/">Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 aria-label="Quick Links">Social media</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" title="Facebook">
                  Facebook
                </a>
              </li>
              <li>
                <a href="/" title="Twitter">
                  Twitter
                </a>
              </li>
              <li>
                <a href="/" title="Youtube">
                  YouTube
                </a>
              </li>
              <li>
                <a href="/" title="LinkedIn">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12">
            <p className="copyright-copy">Copyright @ 2022 Lugar Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
