// components/WhyUsSection.js
import React from 'react';
import img6 from '@/app/assets/images/a6.jpg'
import Image from 'next/image';

const WhyUsSection = () => {
  return (
    <section className="w3l-circles py-5" id="circles">
      <div className="container py-md-5 py-2">
        <div className="row w3l-circles">
          <div className="col-lg-6 circles-left">
            <Image src={img6} alt="" className="radius-image img-fluid" />
          </div>
          <div className="col-lg-6 circles-right mt-lg-0 mt-5 align-self position-relative">
            <h6 className="title-subw3hny">Why Us</h6>
            <h3 className="title-w3l mb-4">Growing Healthy Food</h3>
            <p className="mb-5">
              Working with ImpexKakao offers a unique opportunity to engage in a sustainable and
              impactful cocoa trade partnership. With a strong presence in Uganda's Bundibugyo District,
              ImpexKakao is dedicated to sourcing high-quality cocoa beans directly from over
              5,000 local farmers and farmer cooperatives, ensuring they receive fair prices. Their
              commitment to sustainable practices, quality control, and community development sets them
              apart as a reliable and ethical partner. By collaborating with ImpexKakao, you can be part
              of a venture that not only supports premium cocoa production but also contributes to the
              economic prosperity and resilience of farming communities, making a positive impact on
              both business and society.
            </p>
            <div className="progress-circles-grids">
              <div className="progress-circles">
                <div className="progress-left">
                  <div className="circle1">
                    <div
                      id="progress"
                      data-dimension="80"
                      data-text="85%"
                      data-fontsize="18"
                      data-percent="85"
                      data-fgcolor="#006837"
                      data-bgcolor="#f3f5f4"
                      data-width="10"
                      data-bordersize="4"
                      data-animationstep="2"
                    ></div>
                  </div>
                  <div className="progress-right">
                    <h4>Quality Control</h4>
                    <p className="mb-lg-5">This quality control process ensures that only good-quality cocoa beans are selected for further processing and export.</p>
                  </div>
                </div>
              </div>
              <div className="progress-circles">
                <div className="progress-left">
                  <div className="circle1">
                    <div
                      id="progress1"
                      data-dimension="80"
                      data-text="95%"
                      data-fontsize="18"
                      data-percent="95"
                      data-fgcolor="#006837"
                      data-bgcolor="#f3f5f4"
                      data-width="10"
                      data-bordersize="4"
                      data-animationstep="2"
                    ></div>
                  </div>
                  <div className="progress-right">
                    <h4>Quality Agriculture</h4>
                    <p className="mb-lg-5">The company engages with over 5,000 farmers, families, and communities in the Bundibugyo District, which indicates its commitment to community development and empowerment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
