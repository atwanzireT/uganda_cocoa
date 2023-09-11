// components/VideoSection.js
import Link from 'next/link';
import React from 'react';

const VideoSection = () => {
  return (
    <section className="w3l-index5 py-5" id="about">
      <div className="new-block py-md-5 py-3">
        <div className="container">
          <div className="row middle-section align-self">
            <div className="col-lg-7 video-info pe-lg-5">
              <div className="title-content text-left">
                <h6 className="title-subw3hny">Root With Nature</h6>
                <h3 className="title-w3l two pe-lg-5">For Strong economy, develop Cocoa Farming</h3>
                <p className="mt-3 pe-lg-5">
                  Cocoa farming can play a crucial role in strengthening a country's economy. This could 
                  be particularly relevant for regions or countries with suitable climates and conditions 
                  for cocoa cultivation. Developing cocoa farming may lead to increased agricultural 
                  productivity, export earnings, job creation, and overall economic growth.
                </p>
                <Link href="/impact/" className="btn btn-style btn-outline-light mt-sm-5 mt-4">Discover More</Link>
              </div>
            </div>
            <div className="col-lg-5 history-info mt-5 ps-lg-5 align-self">
              <div className="position-relative mt-lg-0 mt-5 pt-lg-0 pt-5 pb-lg-0 pb-5">
                <Link href="#small-dialog" className="popup-with-zoom-anim play-view text-center position-absolute">
                  <span className="video-play-icon">
                    <span className="fa fa-play"></span>
                  </span>
                </Link>
                {/* Add your video popup content here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
