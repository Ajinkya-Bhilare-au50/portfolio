import React, { useEffect, useRef } from "react";

const RollingDivs = () => {
  const scrollingWrapperRef = useRef(null);

  useEffect(() => {
    const scrollingWrapper = scrollingWrapperRef.current;

    const scroll = () => {
      scrollingWrapper.scrollTo({
        left: scrollingWrapper.scrollLeft + 2,
        behavior: "smooth",
      });
    };

    const scrollInterval = setInterval(scroll, 50);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="container mx-auto py-4">
      <div
        className="scrolling-wrapper overflow-x-auto whitespace-nowrap "
        ref={scrollingWrapperRef}
        style={{ overflow: "hidden", textAlign: "center" }}
      >
        <div
          className="inline-block p-4 mr-2"
          style={{ display: "inline-block" }}
        >
          <img
            src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"
            alt=""
            width="80px"
          />
        </div>
        
        <div
          className="inline-block p-4 mr-4"
          style={{ display: "inline-block" }}
        >
          <img
            src="https://erdincuzun.com/wp-content/uploads/svg/nodejs.svg"
            alt=""
            width="60px"
            height="60px"
          />
        </div>
        <div
          className="inline-block p-4 mr-4"
          style={{ display: "inline-block" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
            alt=""
            width="120px"
            height="60px"
          />
        </div>
        <div
          className="inline-block p-4 mr-4"
          style={{ display: "inline-block" }}
        >
          <img
            src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
            alt=""
            width="140px"
            height="90px"
          />
        </div>
        <div
          className="inline-block p-4 mr-4"
          style={{ display: "inline-block" }}
        >
          <img
            src="https://v4.mui.com/static/logo.png"
            alt=""
            width="90px"
            height="60px"
          />
        </div>
        <div
          className="inline-block p-4 mr-4"
          style={{ display: "inline-block" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
            alt=""
            width="90px"
            height="60px"
          />
        </div>
        <div
          className="inline-block p-4 mr-4"
          style={{ display: "inline-block" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png"
            alt=""
            width="90px"
            height="60px"
          />
        </div>
        <div
          className="inline-block p-4 mr-4"
          style={{ display: "inline-block" }}
        >
          <img
            src="https://foundations.projectpythia.org/_images/GitHub-logo.png"
            alt=""
            width="90px"
            height="60px"
          />
        </div>
        <div
          className="inline-block p-4 mr-4"
          style={{ display: "inline-block" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
            alt=""
            width="90px"
            height="60px"
          />
        </div>
        <div
          className="inline-block p-4 mr-4"
          style={{ display: "inline-block" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
            alt=""
            width="90px"
            height="60px"
          />
        </div>
        <div
          className="inline-block p-4 mr-4"
          style={{ display: "inline-block" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            alt=""
            width="65px"
            height="30px"
          />
        </div>
        <div
          className="inline-block p-4 mr-4"
          style={{ display: "inline-block" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
            alt=""
            width="65px"
            height="30px"
          />
        </div>
        <div
          className="inline-block p-4 mr-4"
          style={{ display: "inline-block" }}
        >
          <img
            src="https://litslink.com/wp-content/uploads/2020/12/node.js-logo-image.png"
            alt=""
            width="65px"
            height="60px"
          />
        </div>
      </div>
    </div>
  );
};

export default RollingDivs;
