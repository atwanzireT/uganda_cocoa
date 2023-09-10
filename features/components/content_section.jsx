import Link from 'next/link';
import React from 'react';
import img1 from '@/app/assets/images/a1.jpg'
import img2 from '@/app/assets/images/a2.jpg'
import img3 from '@/app/assets/images/a3.jpg'
import img4 from '@/app/assets/images/a4.jpg'
import Image from 'next/image';

const ContentSection = () => {
  return (
    <section className="w3l-content-4 py-5" id="features">
      <div className="content-4-main py-lg-5 py-md-4 py-2">
        <div className="container">
          <div className="content-info-in row align-items-center">
            <div className="content-left col-lg-6 pe-lg-5">
              <div className="row content4-right-grids mb-sm-5 mb-4 pb-3">
                <div className="col-2 content4-right-icon">
                  <div className="content4-icon">
                    <span className="fas fa-leaf"></span>
                  </div>
                </div>
                <div className="col-10 content4-right-info ps-lg-5">
                  <h6><Link href="#url">Cocoa Beans</Link></h6>
                  <p>The company sources, processes, and exports high-quality cocoa beans from Bundibugyo,
                    Uganda. Cocoa beans are the core product and form the basis of their business.</p>
                </div>
              </div>
              <div className="row content4-right-grids mb-sm-5 mb-4 pb-3">
                <div className="col-2 content4-right-icon">
                  <div className="content4-icon">
                    <span className="fas fa-usd"></span>
                  </div>
                </div>
                <div className="col-10 content4-right-info ps-lg-5">
                  <h6><Link style={{}} href="#url">Sustainable Trade Services</Link></h6>
                  <p>Ezra BR Agency Limited offers sustainable trade services by directly engaging with
                    farmers, farmer cooperatives, and communities to ensure fair and stable prices for
                    their cocoa beans. This service includes training, quality control, and support to
                    enhance the overall cocoa production process.</p>
                </div>
              </div>
              <div className="row content4-right-grids">
                <div className="col-2 content4-right-icon">
                  <div className="content4-icon">
                    <span className="fas fa-users"></span>
                  </div>
                </div>
                <div className="col-10 content4-right-info ps-lg-5">
                  <h6><Link href="#url">Community Development Initiatives</Link></h6>
                  <p>While not a tangible product, the company is actively involved in community development
                    initiatives in the cocoa-producing region. This includes programs aimed at improving the
                    economic prosperity and resilience of local farming communities.</p>
                </div>
              </div>
            </div>
            <div className="HomeAboutImages col-lg-6 mt-lg-0 mt-md-5 mt-4">
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
      </div>
    </section>
  );
};

export default ContentSection;
