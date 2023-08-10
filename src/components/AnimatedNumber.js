// AnimatedNumberScroll.js
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

function AnimatedNumberScroll({ endValue, duration }) {
  const [counting, setCounting] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  if (inView && !counting) {
    setTimeout(() => {
      setCounting(true);
    }, 500); // Cambia este valor al tiempo de retraso deseado en milisegundos
  }

  return (
    <div ref={ref}>
      {counting ? (
        <CountUp
          start={0}
          end={endValue}
          duration={duration}
          separator=","
          decimals={0}
        />
      ) : (
        "0"
      )}
    </div>
  );
}

export default AnimatedNumberScroll;
