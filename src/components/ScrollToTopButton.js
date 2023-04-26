import { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  // Function to handle scrolling to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to toggle showing the button based on scroll position
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Add scroll event listener to window
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      {/* Render button only if showButton state is true */}
      {showButton && (
        <button
          className="fixed right-4 bottom-4 p-4 rounded-full bg-gray-600 text-white shadow-lg hover:bg-indigo-500 transition-colors duration-300"
          onClick={scrollToTop}
        >
          <BsFillArrowUpCircleFill size={30} />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
