import React from 'react';
import Link from 'next/link';
const Services_banner = () => {
  return (
    <div className="inner-banner py-5">
      <section className="w3l-breadcrumb text-left py-sm-5">
        <div className="container">
          <div className="w3breadcrumb-gids">
            <div className="w3breadcrumb-left text-left">
              <h2 className="inner-w3-title">Services</h2>
              <p className="inner-page-para mt-2">Better Agriculture for a Better Future</p>
            </div>
            <div className="w3breadcrumb-right">
              <ul className="breadcrumbs-custom-path">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="active">
                  <span className="fas fa-angle-double-right mx-2"></span> Services
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services_banner;
