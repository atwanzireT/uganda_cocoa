import Link from 'next/link';
import React from 'react';
import a9 from '@/app/assets/images/a9.png'
import Image from 'next/image';

const ServicesBlock = () => {
  return (
    <section className="w3l-circles py-5" id="services">
      <div className="container py-md-5 py-2">
        <div className="row w3l-circles">
          <div className="col-lg-6 circles-left">
            <Image src={a9} alt="" className="radius-image img-fluid" />
          </div>
          <div className="col-lg-6 circles-right mt-lg-0 mt-5 align-self position-relative">
            <h6 className="title-subw3hny">what We Offer</h6>
            <h3 className="title-w3l mb-4">Cocoa Farming <br />Development</h3>
            <p className="">Ezra BR Agency Limited provides a comprehensive range of services centered
              around cocoa production and trade. They directly source high-quality cocoa beans from over
              5,000 local farmers and farmer cooperatives in Uganda's Bundibugyo District. The company
              is involved in the entire cocoa value chain, from procuring cocoa pods to meticulous
              processing, including sorting, drying, and quality control. Their commitment extends
              to sustainable trade practices, ensuring farmers receive fair and stable prices.
              Additionally, Ezra BR Agency Limited actively engages in community development initiatives,
              contributing to the economic prosperity and resilience of farming communities. This holistic
              approach makes them a reliable partner for premium cocoa production and ethical trade.</p>
            <div className="w3banner-content-btns">
              {/* <a href="about.html" className="btn btn-style btn-primary mt-lg-5 mt-4 me-2">Read More <i className="fas fa-arrow-right ms-2"></i></a> */}
              <Link href="/contact/" className="btn btn-style btn-outline-dark mt-lg-5 mt-4">Contact Us <i className="fas fa-arrow-right ms-2"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBlock;
