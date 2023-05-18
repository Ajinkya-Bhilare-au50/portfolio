import React, { useState, useEffect } from "react";

const NumberCounter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const increment = end / (duration / 1000); // Calculate increment per second

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("counter");
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight && !isCounting) {
        setIsCounting(true);
        let startTimestamp = null;
        let animationFrameId = null;

        const animateCount = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = timestamp - startTimestamp;
          setCount(Math.min((increment * progress) / 1000, end));

          if (progress < duration) {
            animationFrameId = requestAnimationFrame(animateCount);
          }
        };

        animationFrameId = requestAnimationFrame(animateCount);

        return () => {
          cancelAnimationFrame(animationFrameId);
        };
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [end, duration, isCounting,increment]);

  return (
    <div id="counter">
      <h1>{Math.floor(count)}</h1>
    </div>
  );
};

export default NumberCounter;
