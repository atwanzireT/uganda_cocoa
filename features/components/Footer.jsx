// components/Footer.js
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w3l-footer-29-main">
      <div className="footer-29-w3l py-2">
        <div className="container pt-md-5">
          <div className="w3l-footer-text-style">
            <div className="footer-list-cont d-sm-flex align-items-center justify-content-between mb-5">
              <h2 className="w3logo">
                <Link className="navbar-brand" href="/">
                  EZRA BR <span className="sub-color">AGENCY</span>
                </Link>
              </h2>
              <div className="main-social-footer-29">
                <ul>
                  <li className="w3follow mt-sm-0 mt-1">Follow Us: </li>
                  <li><Link href="#facebook" className="facebook"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link href="#twitter" className="twitter"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link href="#instagram" className="instagram"><i className="fab fa-instagram"></i></Link></li>
                  <li><Link href="#linkedin" className="linkedin"><i className="fab fa-linkedin-in"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row footer-top-29 pt-lg-1 pt-sm-1">
            <div className="col-lg-3 col-sm-6">
              <div className="address-grid">
                <h5>Bundibugyo <br /> Uganda.</h5>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-sm-0 mt-1 ps-lg-5">
              <div className="address-grid">
                <h5>Phone</h5>
                <h5 className="phone-number-text mt-2"><a href="tel:+256774783452">+256774783452</a></h5>
              </div>
              <div className="address-grid mt-sm-5 mt-4">
                <h5>E-mail</h5>
                <h5 className="email-cont-text mt-1"> <a href="mailto:biyara.ezra@gmail.com " className="mail">biyara.ezra@gmail.com </a></h5>
              </div>
            </div>
            {/* <div className="col-lg-2 col-md-6 col-sm-5 footer-list-menu ps-lg-5 mt-lg-0 mt-sm-5 mt-4">
              <div className="address-grid">
                <h5 className="mb-4 pb-lg-2">Support</h5>
                <ul>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#terms">Terms of Service</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ul>
              </div>
            </div> */}
            {/* <div className="address-grid col-lg-4 col-md-6 col-sm-7 ps-lg-5 mt-lg-0 mt-sm-5 mt-4 w3l-footer-16-main">
              <h5>Subscribe Here</h5>
              <form action="#" className="subscribe d-flex mt-4 pt-lg-2 mb-4" method="post">
                <input type="email" name="email" placeholder="Email Address" required="" />
                <button><span className="fa fa-paper-plane" aria-hidden="true"></span></button>
              </form>
              <p>Subscribe to our mailing list and get updates to your email inbox.</p>
            </div> */}
          </div>
          {/* copyright */}
          {/* <div className="w3l-copyright text-center mt-lg-5 mt-sm-4 pt-md-4 pt-3">
            <p className="copy-footer-29">© 2021 Agrowfarm. All rights reserved. Design by <a href="https://w3layouts.com/" target="_blank">W3layouts</a></p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
