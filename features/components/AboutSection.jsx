// components/AboutSection.js
import React from 'react';
import img1 from '@/app/assets/images/a1.jpg'
import img2 from '@/app/assets/images/a2.jpg'
import img3 from '@/app/assets/images/a3.jpg'
import img4 from '@/app/assets/images/a4.jpg'
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="w3l-about-6 pb-5" id="about">
      <div className="container py-lg-5 py-md-3">
        <div className="row align-items-center">
          <div className="col-lg-6 pe-lg-5">
            <h6 className="title-subw3hny">Our Info</h6>
            <h4 className="title-w4l">Our Mission</h4>
            <p className="mt-md-4 mt-2">
              We are committed to becoming a dominant aggregator and supplier of Quality conventional
              Cocoa and vanilla beans  across the Region with an Identity, while caring of flavor, forest,
              farmers and the Future (4F).
            </p>
            <h5 className="title-w5l mt-5">Empowering Communities Through Sustainable Cocoa Production</h5>
            <p className="mt-md-4 mt-2">
              Our company's core mission is to revolutionize the cocoa value chain with a strong emphasis
              on sustainability and community empowerment. With over 15 years of experience in the cocoa
              industry, our team is dedicated to sourcing high-quality cocoa beans directly from more
              than 5,000 local farmers and farmer cooperatives, ensuring they receive fair and stable
              prices. We pride ourselves on our meticulous sorting, drying, and quality control processes,
              resulting in premium cocoa beans ready for export.
            </p>
            <ul className="service-list pt-lg-2 mt-4">
              <li className="service-link">
                <Link href="/services/#features">
                  <span className="fa fa-check-circle"></span> Cocoa Beans
                </Link>
              </li>
              <li className="service-link">
                <Link href="/services/#features">
                  <span className="fa fa-check-circle"></span> Sustainable Trade Services
                </Link>
              </li>
              <li className="service-link">
                <Link href="/services/#features">
                  <span className="fa fa-check-circle"></span> Community Development Initiatives
                </Link>
              </li>
            </ul>
          </div>
          <div className="HomeAboutImages col-lg-6 mt-lg-0 mt-5">
            <div className="row position-relative">
              <div className="col-6">
                <Image src={img1} alt="" className="radius-image img-fluid" />
                <Image src={img2} alt="" className="radius-image img-fluid mt-md-3 " />
              </div>
              <div className="col-6 mt-4">
                <Image src={img3} alt="" className="radius-image img-fluid mb-md-3 mb-2" />
                <Image src={img4} alt="" className="radius-image img-fluid mt-md-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
