// components/OfferingsSection.js
import Image from 'next/image';
import React from 'react';
import img5 from '@/app/assets/images/a5.jpg'
import img7 from '@/app/assets/images/a7.jpg'
import img8 from '@/app/assets/images/a8.jpg'
import Link from 'next/link';

const OfferingsSection = () => {
  return (
    <section className="w3l-grids-3hny py-5" id="grids1">
      <div className="container py-lg-5 py-md-3">
        <div className="wthree-header-section text-center">
          <h6 className="title-subw3hny">What We Do</h6>
          <h3 className="title-w3l mb-4">What We’re Offering</h3>
        </div>
        <div className="grids-of-3 row text-center">
          <div className="col-lg-4 col-md-6 mt-5">
            <div className="grids3-info">
              <Link href="#service" className="d-block zoom">
                <Image src={img5} alt="" className="img-fluid radius-image" />
              </Link>
              <div className="grids-of-3-saas-info">
                <h5>
                  <a href="#service" className="title">Cocoa Sourcing and Procurement</a>
                </h5>
                <p className="saas-para">
                  The company sources cocoa beans directly from local farmers, farmer groups,
                  and cooperatives in Bundibugyo and Kasese Uganda. This involves the procurement
                  of cocoa beans from the farms and ensuring they meet quality standards.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-5">
            <div className="grids3-info">
              <Link href="#service" className="d-block zoom">
                <Image src={img8} alt="" className="img-fluid radius-image" />
              </Link>
              <div className="grids-of-3-saas-info">
                <h5>
                  <Link href="#service" className="title">Cocoa Processing and Quality Control</Link>
                </h5>
                <p className="saas-para">
                  EZRA BR AGENCY LIMITED is involved in the initial stages of cocoa processing through trainings.
                  Farmers are trained to harvest only ripe cocoa beans every after 14 days. Farmers are
                  encouraged to split the cocoa pods using a blunt equipment in order not to damage the beans.
                  Farmers are trained to ferment for 5-7 days in order to have a subtle aroma. Then beans are sun
                  dried in an open space on a clean or raised surface until beans are to a maximum humidity of
                  8.0%. The semi dry and dry beans are kept in clean dry bags, in a well ventilated store  and
                  on a raised surface.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-5">
            <div className="grids3-info">
              <Link href="#service" className="d-block zoom">
                <Image src={img7} alt="" className="img-fluid radius-image" />
              </Link>
              <div className="grids-of-3-saas-info">
                <h5>
                  <a href="#service" className="title">Export and Sustainable Trade</a>
                </h5>
                <p className="saas-para">
                  The primary focus of the company is to export processed cocoa beans to international
                  markets. However, beyond export, Ezra BR Agency Limited is committed to sustainable trade
                  practices. This includes working closely with farmers and farmer cooperatives, providing
                  fair and stable prices, and contributing to community development initiatives to enhance
                  economic prosperity and resilience in the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
