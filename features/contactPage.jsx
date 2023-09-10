// components/Contact.js
import Link from 'next/link';
import React from 'react';

const ContactPage = () => {
  return (
    <>
      {/* Inner Banner */}
      <div className="inner-banner py-5">
        <section className="w3l-breadcrumb text-left py-sm-5">
          <div className="container">
            <div className="w3breadcrumb-gids">
              <div className="w3breadcrumb-left text-left">
                <h2 className="inner-w3-title">Contact Us </h2>
                <p className="inner-page-para mt-2">Better Agriculture for Better Future </p>
              </div>
              <div className="w3breadcrumb-right">
                <ul className="breadcrumbs-custom-path">
                  <li><Link href="/">Home</Link></li>
                  <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Contact Form */}
      {/* <section className="w3l-contact-main" id="contact">
        <div className="contact-infhny py-5">
          <div className="container py-md-5">
            <div className="title-content text-center mb-md-5 mb-4">
              <h6 className="title-subw3hny">Send us a message</h6>
              <h3 className="title-w3l mx-lg-5">Keep In Touch With Us.</h3>
              <p className="text-para mt-2">Progressively syndicate user-centric schemas without front-end synergy. Monotonectally envisioneer.</p>
            </div>
            <div className="top-map">
              <div className="map-content-9">
                <form action="#" method="post">
                  <div className="form-top1">
                    <div className="form-top">
                      <div className="form-top-righ">
                        <textarea name="Message" id="Message" placeholder="Message*" required=""></textarea>
                      </div>
                      <div className="form-top-left">
                        <input type="text" name="Name" id="Name" placeholder="Name" required="" />
                        <input type="number" name="Phone" placeholder="Your phone number" required="" />
                        <input type="email" name="Sender" id="Sender" placeholder="Email*" required="" />
                      </div>
                    </div>
                    <div className="text-center mt-5">
                      <button type="submit" className="btn btn-style btn-primary">Submit Now <i className="far fa-paper-plane ml-lg-3"></i></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Contact Map */}
      <section className="w3l-contact-main" id="contact">
        <div className="container">
          <div className="map pt-lg-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.05205079916!2d30.0525425855672!3d0.7088146385483635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17616408921e8579%3A0x9cb43640bffe6574!2sBundibugyo!5e0!3m2!1sen!2sug!4v1694336494828!5m2!1sen!2sug"  allowfullscreen=""></iframe>
          </div>
        </div>
      </section>
      {/* Contact Info */}
      <section className="w3l-contact-main w3l-contact-info py-5" id="contact">
        <div className="midd-w3 py-md-5">
          <div className="container">
            <div className="row contact-infos pt-lg-4">
              <div className="col-lg-4 col-md-6 pe-lg-5">
                <div className="single-contact-infos">
                  <div className="icon-box"> <span className="fas fa-map-marked-alt"></span></div>
                  <div className="text-box">
                    <h3 className="mb-2">Location</h3>
                    <p>Bundibugyo Uganda.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                <div className="single-contact-infos">
                  <div className="icon-box"> <span className="fas fa-envelope-open-text"></span></div>
                  <div className="text-box">
                    <h3 className="mb-2">Phone Numbers</h3>
                      <p><Link href="tel:+256774783452">+256774783452</Link></p>
                      <p><Link href="tel:+256702796901">+256702796901</Link></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                <div className="single-contact-infos">
                  <div className="icon-box"> <span className="fas fa-blender-phone"></span></div>
                  <div className="text-box">
                    <h3 className="mb-2">Emails</h3>
                    <p> <Link href="mailto:biyara.ezra@gmail.com">biyara.ezra@gmail.com</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
