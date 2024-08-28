import Link from 'next/link';
import React from 'react';

const BannerSection = () => {
  return (
    <section className="banner-19">
      <div className="banner-layer">
        <div className="main-content-top">
          <div className="container">
            <div className="main-content">
              <div className="w3lbanner-left">
                {/* Uncomment this section if you have a logo image
                <a className="logo" href="index.html">
                  <img
                    src="image-path"
                    alt="Your logo"
                    title="Your logo"
                    style={{ height: '35px' }}
                  />
                </a>
                */}
                <h6>Welcome to  Ezra BR Agency Limited</h6>
                <h4>Cocoa Bean Export.</h4>
                <Link href="/services/" className="btn btn-style btn-secondary mt-md-5 mt-4">
                  Read More
                </Link>
              </div>
              <div className="w3lbanner-right">
                <p>
                  Ezra BR Agency Limited: Better Farming Better Future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
